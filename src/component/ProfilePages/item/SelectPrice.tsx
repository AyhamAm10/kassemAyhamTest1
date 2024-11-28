import useHandleSelectChange from "../../../hooks/UseSelectCHange";

const SelectPrice = () => {

    const handleSelectChange = useHandleSelectChange();


  return (
    <div className="flex flex-col gap-3 w-full ">
      <label
        className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
        htmlFor="Renting unit"
        
      >
        Item Price
      </label>
      <input
        name="item_price"
        onChange={handleSelectChange}
        type="text"
        className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
        placeholder="Item Price"
      />
    </div>
  );
};

export default SelectPrice;
