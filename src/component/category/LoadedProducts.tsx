
const LoadedProducts = () => {
  return (
    <div className="p-4 animate-pulse  flex flex-col items-center gap-4">
      <div className="rounded-lg h-40 w-full  bg-[#d6d6d67d]  " />
      <div className="grid grid-cols-2 gap-4 w-full mx-auto">
        <div className="rounded-lg h-3   bg-[#d6d6d67d]  " />
        <div className="rounded-lg h-3   bg-[#d6d6d67d]  " />
      </div>
      <div className="grid grid-cols-1 gap-4 w-full mx-auto">
        <div className="rounded-lg h-4 w-2/3   bg-[#d6d6d67d]  " />
        <div className="rounded-lg h-4  w-1/3  bg-[#d6d6d67d]  " />
      </div>
    </div>
  )
}

export default LoadedProducts