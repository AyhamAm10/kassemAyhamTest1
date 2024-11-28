
import star from "../assets/profile/Star 1.png"
import WorkingHour from "../component/profile/WorkingHour";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { useGetCompanyApi } from "../api/getAPIs/useGetCompanyApi";
import { useParams } from "react-router-dom";
import { LongStaleTime } from "../api/API__information_conect";
import { useEffect } from "react";
import Loader from "../component/layout/Loader";
const ProfileCompany = () => {

  const {id} = useParams()

  const { data  , isLoading } = useQuery<unknown, Error, { data: any }, QueryKey>({
    queryKey: ["product details", id],
    queryFn: () => useGetCompanyApi(id),
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  useEffect(()=>{
    console.log(data?.data)
  },[data])

  return (
    <>
      {
        isLoading && 
        <div className="h-[50vh] flex-center">
          <Loader />
        </div>
      }
      {
        data && 
        <section className="sm:px-5 mx-auto max-w-[100rem] min-h-[150vh]">
      <div className=" ">
        <img src={data?.data.cover_image} alt="cover img " />
      </div>
      <div className="px-4 sm:px-6 md:px-10 flex gap-5 py-3 sm:py-5">
        <img src={data?.data.image} alt="profile img" className="h-[5rem] sm:h-[7rem] md:h-[9rem] lg:h-[10rem] xl:h-[12rem] translate-y-[-30%] rounded-full" />
        <div>
          <h2 className="text-dark text-[1rem] sm:text-xl md:text-2xl font-medium flex items-center gap-3">
            {`${data?.data.first_name} ${data?.data.last_name}`} 
            <span className="flex gap-1 items-center"> 
                <img src={star} alt="star" />
                <p className="text-dark text-sm sm:text-lg md:text-xl">{data?.data.rating_count}</p>
            </span>
          </h2>
          <div className="text-dark opacity-50 text-sm md:text-[1rem] flex flex-col gap-2">
          <h4>{data?.data.email}</h4>
          <h4>{data?.data.phone_number}</h4>
          </div>
        </div>
      </div>
      <WorkingHour data={data?.data.working_hours} />
      {/* <OwnerReview /> */}
    </section>
      }
    </>
  );
};

export default ProfileCompany;
