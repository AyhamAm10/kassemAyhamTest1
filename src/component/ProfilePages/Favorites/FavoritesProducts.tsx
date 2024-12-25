import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CartSlider from "../../homePage/CartSlider";
import {  LongStaleTime } from "../../../api/API__information_conect";
import { AddNotification } from "../../../utails/message";
import LoadedProducts from "../../category/LoadedProducts";
import { getFavoriteProducts } from "../../../api/postAPIs/getFavoriteProducts";

const FavoritesProducts: React.FC = () => {
    
  const [page, setPage] = useState(1);

  const { data, isLoading, isError , refetch} = useQuery({
    queryKey: ["get my favorite products", page], 
    queryFn: () => getFavoriteProducts(page),
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  useEffect(()=>{
    refetch()
  },[page])

  console.log(data)
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isError) {
    AddNotification("error" , "Error fetching products. Please try again later." , "danger")
  }

  return (
    <div>
      <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-4 gap-4 xl:grid-cols-5">
        
        {
            data?.data.map((item:any)=>{
                return(
                  <div className="flex-center">
                    <CartSlider data={item} />
                  </div>
                )
            })
        }
        
        {
            isLoading &&
            new Array(10).map((_item)=>(
                <LoadedProducts/>
            ))
        }
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

export default FavoritesProducts;
