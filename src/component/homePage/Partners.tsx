import img from "../../assets/home/MOCKUP.png";
// import googlePlay from "../../assets/home/playstore-svgrepo-com 1.png"
// import appStore from "../../assets/home/app-store-svgrepo-com 1.png"
// import huawei from "../../assets/home/huawei-appgallery-seeklogo 1.png"
// import BtnPartners from "./BtnPartners";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/Frame 4.png";
import img2 from "../../assets/Frame 5.png";
import img3 from "../../assets/Frame 6.png";
const Partners: React.FC<{ displayBtn?: boolean }> = ({ displayBtn }) => {
  const { t } = useTranslation();

  const linksApp = [
    {
      img: img1,
      link: "https://play.google.com/store/apps/details?id=com.lootah.yjoz",
    },
    {
      img: img2,
      link: "https://apps.apple.com/us/app/yjoz/id1638068042",
    },
    {
      img: img3,
      link: "https://appgallery.huawei.com/app/C107312115",
    },
  ];

  return (
    <div className="pb-5">
      {displayBtn && (
        <>
          <div className="flex-center ">
            <button className="px-8 py-4 rounded-[0.5rem] text-red cursor-pointer bg-[#FFC21B1A] text-sm font-medium ">
              {t("PARTNERSOFSUCCESS")}
            </button>
          </div>
          <h2 className="text-center text-3xl font-bold my-10 text-dark">
            {t("Successpartners")}
          </h2>
        </>
      )}

      <div className="flex flex-col-reverse lg:flex-row items-center gap-4 sm:gap-6 mdLgap-10 lg:gap-20 justify-between">
        <div className="md:w-[50%] flex flex-col gap-5 sm:gap-10 ">
          <h1 className="text-[#828283] text-xl sm:text-3xl md:text-7xl font-semibold ">
            <span className="text-gradient">Download</span> YJOZ APP
          </h1>
          <p className="text-p  text-2xl">{t("Renting_made_easy")}</p>
          <div className="flex flex-col gap-5 lg:flex-row items-center justify-between xl:w-[80%] ">
            {/* <BtnPartners  img={googlePlay} name="Google Play" title="GET IT ON" border="#D93F21"  />
                  <BtnPartners img={appStore} name="Google Play" title="GET IT ON" border="#2068EC" />
                  <BtnPartners img={huawei} name="Google Play" title="GET IT ON" border="#E14459" /> */}
            {linksApp.map((link, ind) => (
              <a href={link.link}>
                <img
                  src={link.img}
                  className="[aspect-ratio:3/1] min-w-[170px] w-[min(220px,35vw)] "
                  key={ind}
                />
              </a>
            ))}
          </div>
        </div>
        <div>
          <img src={img} alt="MOCKUP" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default Partners;
// href="https://appgallery.huawei.com/app/C107312115"
//href="https://apps.apple.com/us/app/yjoz/id1638068042"
//href="https://play.google.com/store/apps/details?id=com.lootah.yjoz"
