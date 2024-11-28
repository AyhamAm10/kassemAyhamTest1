import victor from "../../assets/plan/Vector.svg";
import Select from "./SelectPayment";
import { useState } from "react";
import { axiosClaint, endPoints } from "../../api/API__information_conect";
import { AddNotification } from "../../utails/message";

type props = {
  data: any;
  images: any;
};
const Payment: React.FC<props> = ({ data, images }) => {
  console.log(images);
  const [price, setPrice] = useState<any | null>(null);
  const handleSelectPlan = async () => {
    const dataToPost = {
      id: data.id,
      variant_id: price.id,
    };
    try {
      const res = await axiosClaint.post(endPoints.post.subscribe, dataToPost);
      if (res) AddNotification("success", "add plan successfully", "success");
    } catch (error: unknown | any) {
      console.log(error);
      AddNotification("error", error.message, "default");
    }
  };
  return (
   
    <div className=" ">
      <div className=" relative overflow-hidden rounded-md flex-col flex justify-between py-4 sm:py-6 md:py-7 lg:py-9 xl:py-12 bg-[#242424] w-[300px] flex-center ">
        <div className="">
          <img src={images.logo} alt="" />
        </div>
        <div className="">
          <img
            src={images.bg}
            className=" absolute bottom-[-60px]  left-0 w-full h-[80%] object-cover"
          />
          <div className="flex-center gap-1 py-3 sm:py-4 flex-col  ">
            <h3 className="text-lg font-bold uppercase text-white ">
              {/* Featured Plan */}
              {data.name}
            </h3>
            <h3 className="text-white font-semibold  text-sm">
              <span className="text-lg">{price?.price ?? 0} AED</span>/mo
            </h3>
          </div>
          <div className="flex-center gap-1 py-3 sm:py-4 flex-col   ">
            <div className="flex-col flex gap-3">
              {data.features?.map((feature: any) => (
                <h3
                  key={feature}
                  className="text-white font-normal flex items-center gap-4 text-sm"
                >
                  <span className="text-lg">
                    <img src={victor} alt="" />
                  </span>
                  {/* No Featured Days */}
                  {feature}
                </h3>
              ))}
            </div>
          </div>
          <div className="flex-col my-4 flex-center gap-3 max-w-[14rem] mx-auto ">
            <Select
              setPrice={setPrice}
              options={data.variants}
              color="#E9233A"
            />
            <button
              onClick={handleSelectPlan}
              className={`hover:scale-105 opacity-90 hover:opacity-100 w-full rounded-md text-white  px-10 py-3 bg-gradient-to-b from-[#CC1F338A] to-[#E9233A] text-sm font-semibold  `}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
