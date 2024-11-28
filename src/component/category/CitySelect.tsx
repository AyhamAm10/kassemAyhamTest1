import Select from './Select';
import { axiosClaint, endPoints, LongStaleTime } from '../../api/API__information_conect';
import { QueryKey, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAttribute } from '../../redux/slice/searchApiSlice';
import { useTranslation } from 'react-i18next';
import { AddNotification } from '../../utails/message';

const CitySelect = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [cleanData, setCleanData] = useState<string[] | null>(null); 
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const handleSelectChange = (newValue: string) => {
    setSelectedValue(newValue);
    console.log("Selected:", newValue);
    if(data && newValue){
      const cityToReq = data?.data.data.filter((city: { id: number; name: string }) => city.name == newValue)[0]
      console.log(cityToReq)
      dispatch(addAttribute({city_id:cityToReq.id , cities: [{id:cityToReq.id}]}))
    }
  };

  const getCityApi: () => Promise<any[]> = async () => {
    const data: any[] = await axiosClaint.get(endPoints.get.getCities);
    return data;
  };

  const { data , error } = useQuery<
    unknown,
    Error,
    { data: { data: any[] } },
    QueryKey
  >({
    queryKey: ["city api"],
    queryFn: getCityApi,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  useEffect(() => {
    if (data) {
      const cities = data.data.data.map((city: { id: number; name: string }) => city.name)
      setCleanData(cities); 
      console.log(data.data.data);
    }
  }, [data]);

  useEffect(()=>{
    if(error)
    AddNotification("error" , error.message , "warning" )
  },[error])

  return (
    <div>
      {
        cleanData &&
        <Select onChange={handleSelectChange} data={cleanData} value={selectedValue || t("SelectCity")} />
      }
    </div>
  );
};

export default CitySelect;
