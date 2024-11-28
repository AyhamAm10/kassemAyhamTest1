import Select from './Select';
import { useDispatch, useSelector } from 'react-redux';
import { QueryKey, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { categoryType } from '../../type/reduxType';
import { useGetCategoryApi } from '../../api/getAPIs/useGetCategory';
import { getCategoryApi } from '../../redux/slice/categorySlice';
import { LongStaleTime } from '../../api/API__information_conect'; 
// import { initialcategorySelectValue } from '../../content';
import { addAttribute , addNewFiltering } from '../../redux/slice/searchApiSlice';
import { useTranslation } from 'react-i18next';
import { AddNotification } from '../../utails/message';

export interface resData {
    data:  categoryType[]
}

type props ={
  setSubCategory : React.Dispatch<React.SetStateAction<any[] | null>>,
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>,
  selectedValueId: any,
  setSelectedValueId: React.Dispatch<React.SetStateAction<any | null>>
}

const CategorySelected:React.FC<props> = ({setSubCategory  , setSelectedValueId }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [cleanData, setCleanData] = useState<string[]>([]); 
  const {t} = useTranslation()
  const categotysData = useSelector(
    (state: any) => state.categorySlice 
  );

  const dispatch = useDispatch();

  const { data , error } = useQuery<
    unknown,
    Error,
    resData,
    QueryKey
  >({
    queryKey: ["categorys api"],
    queryFn: useGetCategoryApi,
    // enabled: !categotysData,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  useEffect(() => {
    if (data && !categotysData) {
      dispatch(getCategoryApi(data.data)); 
    }
  }, [data, categotysData, dispatch]);
  
  useEffect(()=>{
  const newData = data?.data.filter((item)=> item.category == selectedValue )
  if(newData && newData.length > 0){
    const subCategory = newData[0]?.sub_categories.map((categoryItem:any , index:number)=>{
      return {
        title: categoryItem.category, 
        id: categoryItem.id,
        active: index == 0 ? true : false, 
        image: categoryItem.image, 
      };
    })
    setSelectedValueId(newData)
    setSubCategory(subCategory)
    dispatch(addAttribute({category_id: newData[0].id}))
  }
  console.log(newData)

  },[data ,selectedValue , categotysData])

  const handleSelectChange = (newValue: string) => {
    setSelectedValue(newValue);
    const dataWithId = categotysData.category.filter((item:categoryType)=>item.category == newValue )[0]
    dispatch(addNewFiltering({category_id: dataWithId.id}))
    setSelectedValueId(dataWithId)
    console.log(dataWithId)
  };

  useEffect(() => {
    if (categotysData) {
      const categoryNames = categotysData.category.map((category: any) => category.category);
      setCleanData(categoryNames); 
    }
  }, [categotysData]);

  useEffect(()=>{
    if(error)
    AddNotification("error" , error.message , "warning" )
  },[error])
  
  return (
    <div>
      {cleanData.length > 0 && (
        <Select onChange={handleSelectChange} data={cleanData} value={selectedValue || t("SelectCategory")} />
      )}
    </div>
  );
};

export default CategorySelected;
