import {  useSelector } from "react-redux";
import useHandleSelectChange from "../../../hooks/UseSelectCHange";

const Price = () => {
  const handleSelectChange = useHandleSelectChange();
  // const dispatch = useDispatch();
  const productFormSlice = useSelector(
    (state: any) => state.productFormSlice
  ).renting_mode;

  return (
    <>
      {/* if day  */}
      {productFormSlice === "day" && (
        <>
          <div className="flex flex-col gap-3 w-full ">
            <label
              className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
              htmlFor="Renting unit"
            >
              Item price car
            </label>
            <input
              onChange={handleSelectChange}
              name="day_price"
              type="text"
              className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
              placeholder="Day"
            />
          </div>
          <div className="flex flex-col gap-3 w-full ">
            <label
              className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
              htmlFor="Renting unit"
            >
              Item price car
            </label>
            <input
              onChange={handleSelectChange}
              type="text"
              name="week_price"
              className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
              placeholder="7 day price"
            />
          </div>
          <div className="flex flex-col gap-3 w-full ">
            <label
              className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
              htmlFor="Renting unit"
            >
              Item price car
            </label>
            <input
              onChange={handleSelectChange}
              name="month_price"
              type="text"
              className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
              placeholder="28 day price"
            />
          </div>
        </>
      )}

      {/* if unit */}
      {productFormSlice === "unit" && (
        <>
          <div className="flex col-span-1 sm:col-span-2 md:col-span-3 gap-3 w-full ">
            <input
              name="day_price"
              type="text"
              className="p-3   text-dark opacity-40 rounded-sm  sm:w-full bg-white "
              placeholder="3 Persons"
            />
            <input
              name="day_price"
              type="text"
              className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
              placeholder="Price"
            />
          </div>

          <div className="flex col-span-1 sm:col-span-2 md:col-span-3 gap-3 w-full  ">
            <input
              name="day_price"
              type="text"
              className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
              placeholder="Unit Count"
            />
            <input
              name="day_price"
              type="text"
              className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
              placeholder="Price"
            />
          </div>

          <div className="flex col-span-1 sm:col-span-2 md:col-span-3 gap-3 w-full  ">
            <input
              name="day_price"
              type="text"
              className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
              placeholder="Unit Count"
            />
            <input
              name="day_price"
              type="text"
              className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
              placeholder="Price"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Price;
