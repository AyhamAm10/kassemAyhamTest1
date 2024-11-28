
import useHandleSelectChange from "../../../hooks/UseSelectCHange";

const Price = () => {
    const handleSelectChange = useHandleSelectChange();


  return (
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
  );
};

export default Price;
