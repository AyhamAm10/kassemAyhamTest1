import useHandleSelectChange from '../../../hooks/UseSelectCHange'

const Quantaty = () => {
    const handleSelect = useHandleSelectChange()
  return (
    <div className="flex flex-col gap-3 w-full ">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Quantity
          </label>
          <input
          name='quantity'
          onChange={handleSelect}
            type="text"
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            placeholder="Quantity"
          />
        </div>
  )
}

export default Quantaty