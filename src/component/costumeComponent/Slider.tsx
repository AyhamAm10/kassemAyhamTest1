import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CostumBtn from "./CostumBtn";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addNewFiltering } from "../../redux/slice/searchApiSlice";
import SliderLayout from "../layout/SliderLayout";

type sliderProps = {
  data: any[];
  Component: React.ComponentType<{ data: any }>;
  bg?: string;
  subCategory?: any[];
  screenSize: number;
};

const Slider: React.FC<sliderProps> = ({
  data,
  Component,
  bg,
  subCategory,
  screenSize,
}) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCheckCategory = () => {
    dispatch(addNewFiltering({ category_id: data[0].category.id }));
    navigate("/search");
  };
  return (
    <>
      {data.length > 0 && (
        <div className={`w-full my-10 bg-[${bg}] `}>
          <div className="flex-center">
            <button className="px-8 py-4 rounded-[0.5rem] text-red cursor-pointer bg-[#FFC21B1A] text-sm font-medium ">
              {data[0].category.category}
            </button>
          </div>
          <h2 className="text-center text-3xl font-bold my-10 text-dark">
            {t("Most")} <span className="text-gradient">{t("popular")}</span>{" "}
            {data[0].category.category}
          </h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={screenSize}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map((item, id) => (
              <SwiperSlide key={id}>
                <Link to={`product/${item.id}`}>
                  <Component data={item} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dots Pagination */}
          <div className="flex justify-center mt-5">
            <div className="swiper-pagination"></div>
          </div>
          {/* i wont create slider hear */}
          {/* <div className='flex items-center gap-3 gap-x-2 justify-around flex-wrap '>
          {
            subCategory && 
            subCategory.map((item)=>(
              <div key={item.id}>
                <img className='h-10 sm:h-16' src={item.image} alt={item.category} />
              </div>
            ))
          }
        </div> */}
          <SliderLayout style=" gap-x-4 justify-around flex w-max md:w-full  ">
            {subCategory &&
              subCategory.map((item) => (
                <div key={item.id} className="inline-block ">
                  <img
                    className="h-10 w-10 sm:h-16"
                    src={item.image}
                    alt={item.category}
                  />
                </div>
              ))}
          </SliderLayout>

          <div className="flex-center py-10">
            <CostumBtn
              fn={handleCheckCategory}
              value={t("ShowAll")}
              style="w-full md:w-auto "
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
