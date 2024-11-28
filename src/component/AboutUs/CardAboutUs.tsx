
type props = {
    img: string;
    title: string;
    p: string;
    btn?: string;
    fn?:()=>void

}

const CardAboutUs:React.FC<props> = ({
  img,
  title,
  p,
  btn,
  fn
}) => {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-8 md:py-10 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
        <img src={img} alt={title} className="w-[6rem]" />
        <div>
          <h3 className="text-[#242331] text-center md:text-start text-3xl font-bold mb-3 ">
            {title}
          </h3>
          <p className="text-sm text-textLight md:text-xl text-center md:text-start ">
            {p}
          </p>
        </div>
      </div>
      {btn && (
        <div className="flex-center flex-col md:flex-row mt-5">
          <button
          onClick={fn}
          className="px-5 py-2 rounded-md text-white bg-red font-bold">
            {btn}
          </button>
        </div>
      )}
    </div>
  );
};

export default CardAboutUs;
