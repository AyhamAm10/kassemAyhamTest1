import React from "react";
import img from "../../assets/aboutUs/about 1.png";
import { useTranslation } from "react-i18next";
const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const str: string =t("heroParagraph")

  return (
    <div className="flex-center">
      <div className=" grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-10 items-center">
        <div className="flex-center">
            <img src={img} alt="about us img " className="w-[70%]"  />
        </div>
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-dark text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            {t("Sustainability")} <span className="text-green">{t("Experience")}</span>
          </h1>
          <h1 className="text-dark text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
          {t("EffortlesslyWith")} <span className="text-red">{t("YJOZ")}</span>
          </h1>
          <p className="text-[#525C60] text-sm md:text-2xl ">
            {
            str.split(" ").map((word:string , ind:number)=>(
                <span key={ind} className={`${word == "YJOZ" ?  "text-yalwe" :""  } ${ind == 0 ? "text-red" :""}`}>
                    {word}
                    <span> </span>
                </span>
                
            ))
            }
            </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
