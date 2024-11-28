import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData } from '../../../redux/slice/createProjectSlice';
import { useTranslation } from 'react-i18next';

const RentalStatus: React.FC = () => {
  const [isConfirmed, setIsConfirmed] = useState<"support" | "not_support">("not_support");
  const dispatch = useDispatch()
  const {t} = useTranslation("Renting_unit")
  const handleToggle = (): void => {
    setIsConfirmed((prev)=> prev === "support" ? "not_support" : "support" );
    dispatch(setFormData({is_renting_support  : isConfirmed === "support" ? "not_support" : "support"}))
  };


  return (
    <div className="flex items-center gap-3">
      <span className="text-dark font-medium text-sm sm:text-[1rem]">
        {t("For_Renting")}
      </span>
      <svg
        onClick={handleToggle}
        className={`cursor-pointer ${isConfirmed ? 'text-green-500' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        {isConfirmed === "support" ? (
          <path
            d="M5 13l4 4L19 7"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
            stroke="url(#paint0_linear_339_7813)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        <defs>
          <linearGradient
            id="paint0_linear_339_7813"
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E9233A" />
            <stop offset="1" stopColor="#FFC41B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default RentalStatus;
