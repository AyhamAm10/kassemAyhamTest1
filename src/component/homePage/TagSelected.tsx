import  { useEffect, useState } from 'react'
import { axiosClaint, endPoints, LongStaleTime } from '../../api/API__information_conect';
import { QueryKey, useQuery } from '@tanstack/react-query';
import Select from '../category/Select';
import { useDispatch } from 'react-redux';
import { addAttribute } from '../../redux/slice/searchApiSlice';

const TagSelected = () => {

    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [cleanData, setCleanData] = useState<string[]>([]); 
    const dispatch = useDispatch()
    const handleSelectChange = (newValue: string) => {
      setSelectedValue(newValue);
      console.log("Selected:", newValue);
      if(data){
        console.log(data.data.data)
       const tagToReq = data.data.data.filter((tag)=>tag.tag == newValue)[0]
        dispatch(addAttribute({tag_id: tagToReq.id}))
       console.log(tagToReq)
      }
    };
  
    const getTagApi: () => Promise<any[]> = async () => {
      const data: any[] = await axiosClaint.get(endPoints.get.tags);
      console.log(data)
      return data;
    };
  
    const { data } = useQuery<
      unknown,
      Error,
      { data: { data: any[] } },
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
        const cities = data.data.data.map((city: { id: number; tag: string }) => city.tag);
        setCleanData(cities); 
        console.log(cities);
      }
    }, [data]);

  return (
    <div>
        <Select onChange={handleSelectChange} data={cleanData} value={selectedValue || "by tag"} />
    </div>
  )
}

export default TagSelected