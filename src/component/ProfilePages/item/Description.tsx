
import useHandleSelectChange from "../../../hooks/UseSelectCHange";

const Description = () => {

    const handleSelectChange = useHandleSelectChange();

  return (
    <div className="flex flex-col gap-3 w-full my-3 sm:my-6 md:my-9 ">
      <label
        className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
        htmlFor="Renting unit"
        
      >
        Description
      </label>
      <textarea
        onChange={handleSelectChange}
        name="description"
        className="p-3 resize-none h-40 w-full text-dark opacity-40 rounded-sm  sm:w-full bg-white "
        placeholder="Number of doors"
      />
    </div>
  );
};

export default Description;
