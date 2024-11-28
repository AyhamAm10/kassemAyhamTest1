import { QueryKey, useQuery } from "@tanstack/react-query";
import { axiosClaint, endPoints, LongStaleTime } from "../../../api/API__information_conect";
import { useEffect } from "react";
import useHandleSelectChange from "../../../hooks/UseSelectCHange";

const SelectTag = () => {

    const handleSelect = useHandleSelectChange()
    const getTagApi: () => Promise<any[]> = async () => {
      const data: any = await axiosClaint.get(endPoints.get.tags);
      return data.data.data;
    };
  
    const { data } = useQuery<
      unknown,
      Error,
      any[] ,
      QueryKey
    >({
      queryKey: ["tag api"],
      queryFn: getTagApi,
      staleTime: LongStaleTime,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
    });
  
    useEffect(() => {
      if (data) {
        console.log(data)
      }
    }, [data]);

  return (
    <div className="flex flex-col gap-3 w-full">
      <label
        className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
        htmlFor="Renting unit"
      >
        item Status
      </label>
      <select
      
        name="tag_id"
        onChange={handleSelect}
        className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
      >
        <option value="">select tag</option>
        {
            data?.map((tag)=>(
                <option key={tag.id} value={tag.id}>{tag.tag}</option>
            ))
        }
    
      </select>
    </div>
  );
};

export default SelectTag;
