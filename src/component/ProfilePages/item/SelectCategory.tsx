import { QueryKey, useQuery } from "@tanstack/react-query";
import { resData } from "../../category/CategorySelected";
import { useGetCategoryApi } from "../../../api/getAPIs/useGetCategory";
import { LongStaleTime } from "../../../api/API__information_conect";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryApi } from "../../../redux/slice/categorySlice";
import { useEffect } from "react";
import { categoryType } from "../../../type/reduxType";
import useHandleSelectChange from "../../../hooks/UseSelectCHange";
const SelectCategory = () => {
  const dispatch = useDispatch();

  const categotysData = useSelector(
    (state: any) => state.categorySlice?.category
  );

  const handleSelectChange = useHandleSelectChange();

  const { data } = useQuery<unknown, Error, resData, QueryKey>({
    queryKey: ["categorys api"],
    queryFn: useGetCategoryApi,
    enabled: !categotysData,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  useEffect(() => {
    if (data) {
      dispatch(getCategoryApi(data.data));
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-3  w-full">
      <label
        className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
        htmlFor="Renting unit"
      >
        Main category
      </label>
      <select
        name="category_id"
        className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white"
        onChange={handleSelectChange}
      >
        
        <option value={""}>select category</option>
        {categotysData?.map((item: categoryType) => (
          <option value={item?.id} key={item?.id}>
            {item?.category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;
