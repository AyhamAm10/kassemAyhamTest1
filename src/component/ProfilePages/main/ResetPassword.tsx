

const ResetPassword = () => {
  return (
    <div className="md:w-[35rem] flex flex-col gap-4  sm:gap-6  ">
      <div>
        <h1 className="text-dark opacity-80 text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold ">
          Reset Password
        </h1>
        <p className="text-dark opacity-40 text-xs sm:text-sm md:text-[1rem] font-medium py-3 sm:py-6 md:py-10">
          it is recommendded to update your password every once in a while.
        </p>
      </div>
      <button className="text-center shadow-md w-full py-3 rounded-md bg-gradient-to-r from-[#E9233A] to-[#CC3030] text-white">
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
