import { useTranslation } from "react-i18next"
import imgSlider from "../../assets/images Slider.png"
import CostumBtn from "../costumeComponent/CostumBtn"

const HeroSection:React.FC = () => {
  const {t} = useTranslation()
  return (
    <section className=" flex-center py-4 [padding-inline:min(3vw,60px)] max-w-[2044px] mx-auto">
        <div className=" relative px-1 sm:px-0 sm:w-[90%] m-auto flex flex-col sm:block">
            <img src={imgSlider} alt="img slider" className="z-10 sm:block float-end rounded-bl-[100px] sm:rounded-bl-3xl md:w-[70%]" />
            <div className=" z-20 sm:absolute sm:top-1/2 sm:translate-y-[-50%] sm:rounded-tr-[100px] sm:px-3 py-5 sm:p-7 md:p-9 sm:bg-white ">
                <div className=" sm:translate-y-0 mt-4 mr-4 md:max-w-[600px] 2xl:max-w-[730px]">
                    <p className="font-semibold  text-3xl sm:text-5xl md:text-6xl text-ofblack " >
                    <span className="text-gradient linear-gradient(90deg, #ff7a18, #af002d 70%)">{t("Discover")} </span>
                    {t("a_World_of_Sharing_with_Sustainability")}
                    </p>
                    <p className="text-lg sm:text-2xl text-[#274C5B] mt-5 ">{t("Rent_or_Lend_items_hassle_free")}</p>
                    <CostumBtn value={t("View_More")} style="w-full sm:w-auto mt-4 sm:mt-[100px]" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection