import { useTranslation } from "react-i18next";
import useHandleSelectChange from "../../../hooks/UseSelectCHange";
import CheckboxComponent from "./CheckBox";
import Description from "./Description";
import Price from "./Price";
import Quantaty from "./Quantaty";
import Renting from "./Renting";
import RentalStatus from "./RentingState";
import SelectCategory from "./SelectCategory";
import SelectPrice from "./SelectPrice";
import SelectSubCategory from "./SelectSubCategory";
import SelectTag from "./SelectTag";
import SellingState from "./SellingState";
import Variant from "./Variant";

const RentingUnit = () => {
  const handleSelect = useHandleSelectChange();
  const {t} = useTranslation("Renting_unit")

  
  return (
    <>
      <div className="flex items-end flex-wrap gap-5  md:gap-10 mt-3 sm:mt-6 py-5 sm:py-10">
        <Renting />
        <RentalStatus />
        <SellingState />
      </div>
      <div className="flex flex-col gap-3 w-full my-3 sm:my-6 md:my-9">
        <label
          className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
          htmlFor="Renting unit"
        >
          {t("Item_Info")}
        </label>
        <input
          onChange={handleSelect}
          type="text"
          className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
          placeholder="Title"
          name="title"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-9">
        <SelectCategory />
        <SelectSubCategory />
        <Variant />
        <div className="flex flex-col gap-3 w-full ">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Number of doors
          </label>
          <input
            type="text"
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            placeholder="Number of doors"
          />
        </div>
        <div className="flex flex-col gap-3 w-full ">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Number of Seats
          </label>
          <input
            type="text"
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            placeholder="Number of Seats"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Variant
          </label>
          <select
            name="Gear car "
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            id=""
          >
            <option value="Variant">Gear car</option>
          </select>
        </div>
      </div>
      <Description />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-9">
        <Price />
        <SelectTag />
        <SelectPrice />
        <Quantaty />
        <CheckboxComponent />
      </div>
    </>
  );
};

export default RentingUnit;
