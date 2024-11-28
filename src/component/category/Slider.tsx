import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useScreenSize from '../../hooks/useScreenSizeSlider';

type sliderProps = {
  data : any[] | null,
  Component : React.ComponentType<{data: any}>
  bg ?: string
  subCategory? : any[];
  sliderFn?: (data?: any)=> void;
  plusNumber? : boolean 
}

const Slider:React.FC<sliderProps> = ({data , Component , bg  , sliderFn , plusNumber}) => {

  const screenSize = useScreenSize()
  return (
    <>
      {
        data &&
      <div className={`w-full my-10 bg-[${bg}] `}>
        <Swiper
          spaceBetween={30}
          slidesPerView={plusNumber ?screenSize -1  : screenSize}
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
          {data.map((item , id) => (
            <SwiperSlide key={id}>
              <div  onClick={sliderFn?  ()=>{sliderFn(item.id)}: ()=>console.log("work")} >
              <Component  data={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      }
    </>
  );
};

export default Slider;
