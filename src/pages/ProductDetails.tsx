import { useParams } from "react-router-dom";
import Slider from "../component/productDetails/Slider";
import Details from "../component/productDetails/Details";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { useGetProductDetails } from "../api/getAPIs/useGetProductDetails";
import { LongStaleTime } from "../api/API__information_conect";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../redux/slice/ProductDetailsSlice";
import SubProducts from "./SubProducts";

const ProductDetails: React.FC = () => {
  const { id } = useParams();

  const productsDetiles = useSelector(
    (state: any) => state.productDetailsSlice
  );
  const dispatch = useDispatch();

  const { data , refetch } = useQuery<unknown, Error, { data: any[] }, QueryKey>({
    queryKey: ["product details", id],
    queryFn: () => useGetProductDetails(id),
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  useEffect(() => {
    if (data) {
      dispatch(getProductDetails(data.data));
      console.log(data.data)
    }
  }, [data, dispatch]);

  return (
    <div className="">
      {productsDetiles && (
        <>
          <Slider
            imgList={productsDetiles.productDetailsState.images?.map(
              (img: string, ind: number) => {
                return { img: img, id: ind };
              }
            )}
          />

          <Details refetch={refetch} />
          <hr className="mx-10" />
          <SubProducts />
        </>
      )}
    </div>
  );
};

export default ProductDetails;
