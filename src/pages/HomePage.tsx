import React from 'react'
import HeroSection from '../component/homePage/HeroSection'
import HowToStart from '../component/homePage/HowToStart'
import Categorys from '../component/homePage/Categorys'
import CarSLider from '../component/homePage/CarSLider';
import PeopleSayAbuoyUs from '../component/homePage/PeopleSayAbuoyUs';
import { BlogHome } from '../component/homePage/BlogHome';
import Partners from '../component/homePage/Partners';



const HomePage:React.FC = () => {
  
  return (
    <div className='min-h-screen '>
      <HeroSection />
      <HowToStart />
      <div className='mx-auto  [padding-inline:min(3vw,60px)] max-w-[2044px] '>
      <Categorys />
      <CarSLider />
      <PeopleSayAbuoyUs />
      <BlogHome />
      <Partners displayBtn={true} />
      </div>
    </div>
  )
}

export default HomePage