type props = {
  title: string,
  desc: string,
  bg: string,
  id: number
}

const Level:React.FC<props> = ({title , desc , bg , id}) => {
  return (
    <div className="p-6  bg-white sm:max-w-[30rem] w-full rounded-md shadow-xl border border-yalwe ">
      {/* <div className="flex items-center justify-between"> */}
      <div className="mb-3 flex items-center gap-3 ">
        <div className="rounded-full flex-center p-1  ">
          <span className={`h-10 w-10 bg-${bg} flex-center text-white text-lg  rounded-full`}>
            {id}
          </span>
        </div>
        <h1 className="text-dark font-medium text-lg sm:text-2xl">
        {title}
        </h1>
      </div>
      {/* </div> */}
      <div className="px-3 py-8 ">
        <p className="text-lg font-medium opacity-80 text-[#7A7A7A]">{desc} </p>
      </div>
    </div>
  );
};

export default Level;
