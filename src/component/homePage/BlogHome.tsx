import React from 'react'
import imgcomp from "../../assets/home/Component 22.png"
import { blogsList } from '../../content'
import CostumBtn from '../costumeComponent/CostumBtn'
import { useTranslation } from 'react-i18next'
export const BlogHome:React.FC = () => {
    const {t} = useTranslation()
  return (
    <div className={`w-full lg:my-10  `}>
    <div className='flex-center'>
    <button className="px-8 py-4 rounded-[0.5rem] text-red cursor-pointer bg-[#FFC21B1A] text-sm font-medium ">
   {t("Blog")}
   </button>
    </div>
   <h2 className="text-center text-3xl font-bold my-10 text-dark">{t("Most")} <span className="text-gradient">{t("popular")}</span> {t("LatestBlog")}  </h2>
    <div className='grid grid-col-1 lg:grid-cols-10 xl:grid-cols-2 lg:grid-rows-1 gap-4 sm:gap-6 md:gap-10 lg:gap-20 items-start'>
        <div className='flex flex-col gap-5 col-span-4 xl:col-span-1'>
            <img src={imgcomp} className='w-full hover:scale-105 transition-all duration-300' alt="" />
            <p className='text-2xl font-normal text-[#252641] '>{t("lorim15")}</p>
            <p className='text-lg text-[#696984]'>{t("lorim15")}</p>
            <span className='text-[#696984] text-lg tracking-wide'>Read more</span>
        </div>
        <div className='col-span-6 xl:col-span-1'>
            <div className='flex flex-col gap-5'>
                {
                    blogsList.map((item , index)=>(
                        <div key={index} className='flex flex-col sm:flex-row gap-4 items-center'>
                            <img src={item.img} alt="blog img" className='rounded-md hover:scale-105 transition-all duration-300 ' />
                            <div>
                                <p className='text-lg font-medium text-[#252641] mb-4'>{item.title} </p>
                                <p className='text-lg tracking-wide text-[#696984] '>{item.desc} </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    <div className='flex-center py-10'>
    <CostumBtn value='Show All'/>
    </div>
    </div>
  )
}
