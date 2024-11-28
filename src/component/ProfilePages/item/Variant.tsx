

const Variant = () => {
  return (
    <div className="flex flex-col gap-3  w-full">
      <label
        className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
        htmlFor="Renting unit"
      >
        Variant
      </label>
      <select
        name="Renting "
        className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
        id=""
      >
        <option value="Variant">Variant</option>
      </select>
    </div>
  );
};

export default Variant;
