import bg from "../../assets/profile/Rectangle 6691.png";
import profileImg from "../../assets/profile/Ellipse 12.png";
import Subscriptions from "../../component/ProfilePages/main/Subscriptions";
import PersonalDetails from "../../component/ProfilePages/main/PersonalDetails";
import BusinessSettings from "../../component/ProfilePages/main/BusinessSettings";
import WorkingHour from "../../component/ProfilePages/main/WorkingHour";
import ResetPassword from "../../component/ProfilePages/main/ResetPassword";
import DeleteAccount from "../../component/ProfilePages/main/DeleteAccount";
import { useEffect } from "react";
import {
  // axiosClaint,
  // endPoints,
  LongStaleTime,
} from "../../api/API__information_conect";
import { UserProfile } from "../../type/reduxType";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../../redux/slice/userProfileSlice";
import { fetchProfile } from "../../api/getAPIs/getUserProfile";

const Main = () => {
  const dispatch = useDispatch();
  const userData: UserProfile = useSelector(
    (state: any) => state.userProfileSlice
  );

  const { data } = useQuery<unknown, any, UserProfile, QueryKey>({
    queryKey: ["user profile api"],
    queryFn: fetchProfile,
    staleTime: LongStaleTime,
    enabled: ()=>userData ? false : true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  useEffect(() => {
    if (data) dispatch(setUserProfile(data));
  }, [data]);

  return (
    <section className="sm:px-16 xl:px-0">
      <div className=" ">
        <img src={bg} alt="" />
      </div>
      <div className="px-4 sm:px-6 md:px-10 flex gap-5 py-3 sm:py-5">
        <img
          src={profileImg}
          alt="profile img"
          className="h-[5rem] sm:h-[7rem] md:h-[9rem] lg:h-[10rem] xl:h-[12rem] translate-y-[-30%]"
        />
        <div>
          <h2 className="text-dark text-[1rem] sm:text-2xl md:text-3xl font-medium flex items-center gap-3">
            {userData ? (
              <>
                <span>{userData?.first_name ?? "No name added"}</span>
                <span>{userData.last_name}</span>
              </>
            ) : (
              "No name added"
            )}
          </h2>
          <div className="text-dark opacity-50 text-sm md:text-[1rem] flex flex-col gap-2">
            <h4 className="text-red font-semibold text-sm sm:text-lg md:text-2xl">
              Basic Plan
            </h4>
            <h4>{userData?.phone_number ?? "No number added"}</h4>
          </div>
        </div>
      </div>
      {userData && (
        <div className="px-3 sm:px-5 md:px-7 max-w-[96rem] mx-auto">
          <Subscriptions />
          <PersonalDetails userData={userData} />
          <BusinessSettings userData={userData} />
          <WorkingHour />
          <div className="pb-10 max-w-[85rem] flex flex-col sm:flex-row flex-wrap gap-y-10 justify-between ">
            <ResetPassword />
            <DeleteAccount />
          </div>
        </div>
      )}
    </section>
  );
};

export default Main;
