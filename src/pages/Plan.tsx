import { QueryKey, useQuery } from '@tanstack/react-query';
import  { useEffect } from 'react'
import { axiosClaint, endPoints, LongStaleTime } from '../api/API__information_conect';
import Payment from '../component/plans/PricingPayment';
import Loader from '../component/layout/Loader';
import bg1 from "../assets/plan/Vector3.png"
import bg2 from "../assets/plan/Vector2.png"
import bg3 from "../assets/plan/Vector1.png"
import logo1 from "../assets/plan/logo3.png"
import logo2 from "../assets/plan/logo2.png"
import logo3 from "../assets/plan/logo1.png"
const Plan = () => {

    const imagesData = [
      {
        logo: logo1,
        bg:bg1
      },
      {
        logo: logo2,
        bg:bg2
      },
      {
        logo: logo3,
        bg:bg3
      }
    ]
     const usefetchPayment = async ()=>{

       const res = await axiosClaint.get(endPoints.get.Subscriptions)
        return res.data
    }

    const { data , isLoading  } = useQuery<unknown, Error, {data:any} | null, QueryKey>({
        queryKey: ["categorys api "],
        queryFn: usefetchPayment,
        staleTime: LongStaleTime,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchInterval: false,
      });


  return (
    <section className='p-3 container mx-auto'>
        <h1 className='text-center text-dark text-lg :md:text-xl lg:text-2xl  xl:text-3xl font-semibold '>Choose Your Plan</h1>
        <div className='my-6 sm:my-12 flex justify-center sm:justify-between gap-8 flex-wrap '>

          {
            isLoading && 
            <div className='flex-center min-h-[70vh] w-full '>
              <Loader />
            </div>
          }
          {
            data?.data.map((plan:any , index:number)=>(
              <Payment key={plan.id} data={plan} images={imagesData[index]} />
            )) 
          }
            
        </div>
    </section>
  )
}

export default Plan