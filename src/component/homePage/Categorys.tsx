import { QueryKey, useQuery } from "@tanstack/react-query";
import bgImg from "../../assets/home/background.png";
import { useGetCategoryApi } from "../../api/getAPIs/useGetCategory";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryApi } from "../../redux/slice/categorySlice";
import { categorysType } from "../../type/reduxType";
import { LongStaleTime } from "../../api/API__information_conect";
import { useTranslation } from "react-i18next";
import { addNewFiltering } from "../../redux/slice/searchApiSlice";
import { useNavigate } from "react-router-dom";

interface resData {
  data: categorysType;
}

const Categorys: React.FC = () => {
  const categotysData = useSelector((state: any) => state.categorySlice);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigation = useNavigate();
  const { data, isLoading } = useQuery<unknown, Error, resData, QueryKey>({
    queryKey: ["categorys api "],
    queryFn: useGetCategoryApi,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  useEffect(() => {
    if (data) {
      dispatch(getCategoryApi(data.data));
    }
  }, [data]);

  const handleChickCategory = (id: string) => {
    dispatch(addNewFiltering({ category_id: id }));
    navigation("/search");
  };

  return (
    <section>
      <div className="flex-center px-4  ">
        <div
          className="w-[60rem] py-5 text-white text-center text-3xl font-normal "
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          {t("SPACE")}
        </div>
      </div>
      <div className="my-10 p-2 flex-center flex-col gap-5 ">
        <button className="px-8 py-4 rounded-[0.5rem] text-red cursor-pointer bg-[#FFC21B1A] text-sm font-medium ">
          {t("Category")}
        </button>
        <h1 className="text-dark text-4xl font-medium ">
          {t("Most")} <span className="text-gradient">{t("popular")} </span>{" "}
          {t("Category")}
        </h1>
      </div>

      <div className="my-10">
        {isLoading && (
          <div className="text-center text-7xl ">{t("loading")}</div>
        )}
        {categotysData && (
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10 lg:gap14 px-3 sm:px-5 md:px-10 cursor-pointer">
            {/* {categotysData.category.map((item: any) => (
              // <Link to={'/search'}>
              <button onClick={()=>handleChickCategory(item.id)} key={item.category} className="group overflow-hidden bg-gradient-to-r lg:bg-none lg:hover:bg-gradient-to-b from-red to-yalwe hover:scale-110 transition-all duration-300 rounded-lg  lg:rounded-md relative flex flex-col lg:flex-row  lg:justify-normal items-center gap-2 sm:gap-4 md:gap-5 lg:px-8  lg:py-2 bg-white shadow-md  ">
                <img
                  src={item.image}
                  className=" w-8 sm:w-10 md:w-12 lg:w-[3.25rem] pt-2 lg:py-0 "
                  alt={"category icon "}
                />
                <h1 className="w-full  bg-white lg:[background-color:transparent]  pb-2 pt-3 lg:py-0 text-dark lg:group-hover:text-white text-[max(13px,2.5vw)] md:text-base lg:text-[15px] xl:text-xl font-semibold uppercase  flex-grow text-center grid place-items-center ">{item.category}</h1>
                <span className="hidden lg:block absolute h-full left-0 top-0 w-3 bg-linear bg-gradient-to-b from-red to-yalwe">
                </span>
              </button>
              // </Link>
            ))} */}
            {categotysData.category.map((item: any) => (
              <button
                onClick={() => handleChickCategory(item.id)}
                key={item.category}
                className="group  overflow-hidden hover:bg-gradient-to-b from-red to-yalwe hover:scale-110 transition-all duration-300 rounded-lg  lg:rounded-md relative flex flex-col lg:flex-row  lg:justify-normal items-center gap-2 sm:gap-4 md:gap-5 lg:px-8  lg:py-2 bg-white shadow-md  "
              >
                <img
                  src={item.image}
                  className=" w-8 sm:w-10 md:w-12 lg:w-[3.25rem] pt-2 lg:py-0 "
                  alt={"category icon "}
                />
                <h1 className="w-full  bg-white  lg:[background-color:transparent]  pb-2 pt-3 lg:py-0 text-dark group-hover:lg:text-white text-[max(13px,2.5vw)] md:text-base lg:text-[15px] xl:text-xl font-semibold uppercase  flex-grow text-center grid place-items-center ">
                  {item.category}
                </h1>
                <span className="hidden lg:block absolute h-full left-0 top-0 w-3 bg-linear bg-gradient-to-b from-red to-yalwe"></span>
              </button>
              // </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Categorys;
