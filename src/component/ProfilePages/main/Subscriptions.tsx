// import { useSelector } from "react-redux";
import CostumBtn from "../../costumeComponent/CostumBtn";
// import { UserProfile } from "../../../type/reduxType";

const Subscriptions = () => {

  // const userData:UserProfile = useSelector((state: any) => state.userProfileSlice);
  
  return (
    <div className=" py-2 sm:py-4">
      <h3 className="  py-3 text-dark text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold">
        My Subscriptions
      </h3>
      <div className="md:bg-[#EBEBEB] rounded-md px-5 sm:px-10 md:px-12 py-4 flex flex-col md:flex-row justify-between md:items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-red text-sm sm:text-lg md:text-xl font-medium">
            Basic Plan
          </h3>
          <p className="text-dark text-sm sm:text-lg font-medium">
            1AD(s) For 0 AED / mo
          </p>
          <p className="text-dark text-sm sm:text-lg font-medium">
            1AD(s) Remains
          </p>
        </div>
        <div className="mt-8 md:mt-auto h-full flex justify-between sm:justify-normal items-center gap-3 sm:gap-5 md:gap-6  ">
          <button
            className={`rounded-md text-red px-4 md:px-10 py-3 border border-red font-bold text-sm`}
          >
            Cancel Subscription
          </button>
          <CostumBtn value="Change Plan " />
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
