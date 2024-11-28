import React from 'react';
import { useTranslation } from 'react-i18next';
import img1 from "../../assets/home/ask.svg";
import img2 from "../../assets/home/proceed.svg";
import img3 from "../../assets/home/negotiate.svg";
import img4 from "../../assets/home/youGet.svg";

type iconListType = {
  number: string;
  icon: string;
  title: string;
};

const HowToStart: React.FC = () => {
  const { t } = useTranslation();

  const iconList: iconListType[] = [
    {
      number: '01',
      icon: img1,
      title: t('YOU_ASK')
    },
    {
      number: '02',
      icon: img2,
      title: t('WE_PROCEED')
    },
    {
      number: '03',
      icon: img3,
      title: t('NEGOTIATE')
    },
    {
      number: '04',
      icon: img4,
      title: t('YOU_GET')
    }
  ];

  return (
    <section className="bg-gradient-to-t from-0% to-95%   sm:bg-gradient-to-r from-red to-yalwe rounded-md my-4 sm:my-10 py-4 sm:py-9 md:py-12 lg:py-20 px-2 sm:px-4 flex flex-col items-center pt-8 ">
      <h1 className="text-white text-xl font-semibold pb-3 sm:pb-5 order-2 sm:order-1">
        {t('How_to_Start')}
      </h1>
      <p className="text-[#333] pb-5 sm:pb-0 order-1 sm:order-2 text-4xl lg:text-[2.8rem] font-semibold">
        {t('Easy_Process')}
      </p>
      <div className="order-3 mt-10 w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-y-8 justify-around items-center max-w-[2044px] mx-auto">
        {iconList.map((item: iconListType) => (
          <div key={item.number} className="flex flex-col items-center gap-y-8">
            <img src={item.icon} alt={item.title} className="w-24 md:w-auto" />
            <div className="text-white text-lg md:text-xl lg:text-3xl mt-2 flex gap-5">
              <span className="lg:text-4xl font-semibold text-white">
                {item.number}
              </span>
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToStart;
