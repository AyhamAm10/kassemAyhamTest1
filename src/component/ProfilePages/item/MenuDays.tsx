import useHandleSelectChange from "../../../hooks/UseSelectCHange";

const MenuDays = () => {

    const handleSelect = useHandleSelectChange()
  return (
    <div className="flex flex-col gap-3 w-full ">
      <label
        className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
        htmlFor="Renting unit"
      >
        Minimum rental days
      </label>
      <input
        name="min_rental_days"
        type="text"
        onChange={handleSelect}
        className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
        placeholder="Minimum rental days"
      />
    </div>
  );
};

export default MenuDays;
