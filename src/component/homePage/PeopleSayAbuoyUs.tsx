import { listPeopleCart } from "../../content/sliderAbout";
import Slider from "./PeopleSlider";
import SayCart from "./SayCart";
import redBg from "../../assets/home/bgred.png"
import yalBg from "../../assets/home/bgYallwe.png"
const PeopleSayAbuoyUs: React.FC = () => {

  return (
    <div className="flex px-4 sm:px-6 md:px-10  lg:px-16 lg:py-16 relative">
      <img src={redBg} className=" hidden md:block absolute z-20 top-10 left-20" />
      <img src={yalBg} className=" hidden md:block absolute z-20 bottom-10 right-20" />
      <Slider data={listPeopleCart} Component={SayCart}   />
    </div>
  );
};

export default PeopleSayAbuoyUs;
