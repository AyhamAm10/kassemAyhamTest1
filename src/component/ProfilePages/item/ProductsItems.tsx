import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CartSlider from "../../homePage/CartSlider";
import { getUserProduct } from "../../../api/postAPIs/getUserProducts";
import { LongStaleTime } from "../../../api/API__information_conect";
import { useDispatch, useSelector } from "react-redux";
import { setProductsProfile } from "../../../redux/slice/myProductsSlice";
import Loader from "../../layout/Loader";
import { AddNotification } from "../../../utails/message";
import Slider from "../../category/Slider";
import LoadedProducts from "../../category/LoadedProducts";

type Product = any; 
type Pagination = {
  current_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  total: number;
  per_page: number;
  from: number;
  to: number;
};

type ApiResponse = {
  data: Product[];
  pagination: Pagination;
};



const PaginatedProducts: React.FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch()
  const myProducts = useSelector((state:any)=>state.myProducts).data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get my products", page], 
    queryFn: () => getUserProduct(page),
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(()=>{
    if(data){
      dispatch(setProductsProfile(data.data))
    }
  },[data])

  if (isLoading) {
    return <div className="h-screen w-full flex-center">
        <Loader />
    </div>;
  }

  if (isError) {
    AddNotification("error" , "Error fetching products. Please try again later." , "danger")
  }

  return (
    <div>
      <div>
       {/* <div >
        {
          myProducts?.map((item:any)=>(
            <CartSlider data={item} />
          ))
        }
      </div>  */}
      <Slider
          data={myProducts ?? null}
          Component={myProducts ? CartSlider : LoadedProducts}
          plusNumber={false}
        />
      </div>
      {data?.pagination && (
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            disabled={!data.pagination.prev_page_url}
            onClick={() => handlePageChange(page - 1)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {data.pagination.current_page} of{" "}
            {Math.ceil(data.pagination.total / data.pagination.per_page)}
          </span>
          <button
            disabled={!data.pagination.next_page_url}
            onClick={() => handlePageChange(page + 1)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PaginatedProducts;
