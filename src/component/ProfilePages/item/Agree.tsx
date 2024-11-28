import { useDispatch, useSelector } from "react-redux";
import { setAgree } from "../../../redux/slice/AgreeForAddProduct";

const Agree = () => {
  const isAgree: boolean = useSelector((state: any) => state.AgreeForAddProduct);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(setAgree());
  };

  return (
    <div className="items-center [flex:1] gap-1 my-3 sm:my-6 md:my-9 text-sm text-red font-medium min-w-52">
      <span className="text-[#323232] text-[min(3vw,12px)]">
        I agree to YJOZ
      </span>
      public Agreement, Terms & Privacy Policy.
      <svg
        className="cursor-pointer inline"
        onClick={handleToggle}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M15.9993 5.33317H7.99935C7.2921 5.33317 6.61383 5.61412 6.11373 6.11422C5.61363 6.61432 5.33268 7.29259 5.33268 7.99984V23.9998C5.33268 24.7071 5.61363 25.3854 6.11373 25.8855C6.61383 26.3856 7.2921 26.6665 7.99935 26.6665H23.9993C24.7066 26.6665 25.3849 26.3856 25.885 25.8855C26.3851 25.3854 26.666 24.7071 26.666 23.9998V11.9998"
          stroke={isAgree ? "green" : "black"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {isAgree && (
          <path
            d="M10 16L14 20L22 12" 
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  );
};

export default Agree;
