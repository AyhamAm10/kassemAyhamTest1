
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useScreenSize from "../../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

type sliderProps = {
  data: any[];
  Component: React.ComponentType<{ data: any; revers?: boolean }>;
  bg?: string;
  
};

const Slider: React.FC<sliderProps> = ({ data, Component, bg }) => {
const {screenSize} = useScreenSize()

  const {t} = useTranslation()
  return (
    <>
      {data && (
        <div className={`w-full my-10 bg-[${bg}] relative `}>
          <div className="flex-center">
            <button className="px-8 py-4 rounded-[0.5rem] text-red cursor-pointer bg-[#FFC21B1A] text-sm font-medium ">
              {t("TESTIMONIAL")}
              TESTIMONIAL
            </button>
          </div>
          <h2 className="text-center text-3xl font-bold my-10 text-dark">
            {t("Whatpeolesayaboutus")}
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
                <Component data={item} revers={id % 2 == 0 ? false : true} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center mt-20">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
