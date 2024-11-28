import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFieldAddress } from "../../../redux/slice/addressSlice";


const DefaultAddressToggle: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    const newValue:boolean = !isChecked;
    setIsChecked(newValue);

    dispatch(
      updateFieldAddress({
        field: "is_default",
        value: newValue,
      })
    );
  };

  return (
    <p
      className="text-dark text-2xl font-medium flex items-center gap-2 pb-5 cursor-pointer"
      onClick={handleClick}
    >
      Mark as default address
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M33.3327 20.0001V30.0001C33.3327 30.8841 32.9815 31.732 32.3564 32.3571C31.7313 32.9822 30.8834 33.3334 29.9994 33.3334H9.99935C9.11529 33.3334 8.26745 32.9822 7.64233 32.3571C7.0172 31.732 6.66602 30.8841 6.66602 30.0001V10.0001C6.66602 9.11603 7.0172 8.26818 7.64233 7.64306C8.26745 7.01794 9.11529 6.66675 9.99935 6.66675H24.9993"
          stroke={isChecked ? "green" : "url(#paint0_linear_348_9502)"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {isChecked && (
          <path
            d="M12 20L18 26L28 14"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        <defs>
          <linearGradient
            id="paint0_linear_348_9502"
            x1="6.66602"
            y1="20.0001"
            x2="33.3327"
            y2="20.0001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E9233A" />
            <stop offset="1" stopColor="#FFC41B" />
          </linearGradient>
        </defs>
      </svg>
    </p>
  );
};

export default DefaultAddressToggle;
