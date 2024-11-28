

const DeleteAccount = () => {
  return (
    <div className="md:w-[35rem] flex flex-col gap-4  sm:gap-6  ">
    <div>
      <h1 className="text-dark opacity-80 text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold ">
      Delete Account
      </h1>
      <p className="text-dark opacity-40 text-xs sm:text-sm md:text-[1rem] font-medium py-3 sm:py-6 md:py-10">
        You Will lose all your account data .
      </p>
    </div>
    <button className="text-center w-full py-3 rounded-md border border-red  shadow-md  text-red">
    Delete Account
    </button>
  </div>
  )
}

export default DeleteAccount