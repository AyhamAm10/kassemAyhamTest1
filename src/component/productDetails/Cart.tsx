import { useSelector } from "react-redux";
import subCategory from "../../assets/productDetails/Frame.svg";
import branch from "../../assets/productDetails/branch.svg";
import stare from "../../assets/productDetails/star.svg";
import color from "../../assets/productDetails/color.svg";
import date from "../../assets/productDetails/date.svg";
import comp from "../../assets/productDetails/comp.svg";
import location from "../../assets/productDetails/location.svg";
import irtc from "../../assets/productDetails/artc.svg";
import money from "../../assets/productDetails/money.svg";
import flowpite from "../../assets/productDetails/flowbite_profile-card-outline.svg";
import view from "../../assets/productDetails/view.svg";
import CostumBtn from "../costumeComponent/CostumBtn";
import { Link } from "react-router-dom";
import { axiosClaint, endPoints } from "../../api/API__information_conect";
import { useState } from "react";
const Cart: React.FC = () => {

  const product = useSelector(
    (state: any) => state.productDetailsSlice
  ).productDetailsState;

  const [is_fevorite, setIsFevorite] = useState<boolean | null>(product.favorite);

  console.log(product)
  const handleShareClick = () => {
    if (navigator.clipboard) {
      const linkToCopy = product?.link ?? "No link available";

      navigator.clipboard
        .writeText(linkToCopy)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy the link: ", err);
        });
    }
  };

  const addFevorite: () => Promise<any> = async () => {

    try {
      const res:any = await axiosClaint.post(
        product.favorite?endPoints.post.removeFavorite :
        endPoints.post.AddFavorite,
        { id: product.id }
      );
      if(res.status == 200)
      setIsFevorite(product.favorite? false: true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full lg:bg-white rounded-md lg:shadow-md px-6 sm:px-8 md:px-10 h-fit py-4 sm:py-6 md:py-8  lg:translate-y-[-70px] flex flex-col gap-3 sm:gap-5 lg:gap-6 lg:max-w-[35rem]  xl:max-w-[41rem]  ">
      <div className="flex items-start gap-3 ">
        <h3 className="text-dark w-full text-lg sm:text-3xl lg:text-4xl  font-medium ">
          {product.title}
        </h3>
        <div className="flex gap-2 items-center translate-y-[-20]">
          {/* share icon */}
          <div
            className="p-1 rounded-full shadow-md"
            onClick={handleShareClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 22C16.1667 22 15.4583 21.7083 14.875 21.125C14.2917 20.5417 14 19.8333 14 19C14 18.9 14.025 18.6667 14.075 18.3L7.05 14.2C6.78333 14.45 6.475 14.646 6.125 14.788C5.775 14.93 5.4 15.0007 5 15C4.16667 15 3.45833 14.7083 2.875 14.125C2.29167 13.5417 2 12.8333 2 12C2 11.1667 2.29167 10.4583 2.875 9.875C3.45833 9.29167 4.16667 9 5 9C5.4 9 5.775 9.071 6.125 9.213C6.475 9.355 6.78333 9.55067 7.05 9.8L14.075 5.7C14.0417 5.58333 14.021 5.471 14.013 5.363C14.005 5.255 14.0007 5.134 14 5C14 4.16667 14.2917 3.45833 14.875 2.875C15.4583 2.29167 16.1667 2 17 2C17.8333 2 18.5417 2.29167 19.125 2.875C19.7083 3.45833 20 4.16667 20 5C20 5.83333 19.7083 6.54167 19.125 7.125C18.5417 7.70833 17.8333 8 17 8C16.6 8 16.225 7.929 15.875 7.787C15.525 7.645 15.2167 7.44933 14.95 7.2L7.925 11.3C7.95833 11.4167 7.97933 11.5293 7.988 11.638C7.99667 11.7467 8.00067 11.8673 8 12C7.99933 12.1327 7.99533 12.2537 7.988 12.363C7.98067 12.4723 7.95967 12.5847 7.925 12.7L14.95 16.8C15.2167 16.55 15.525 16.3543 15.875 16.213C16.225 16.0717 16.6 16.0007 17 16C17.8333 16 18.5417 16.2917 19.125 16.875C19.7083 17.4583 20 18.1667 20 19C20 19.8333 19.7083 20.5417 19.125 21.125C18.5417 21.7083 17.8333 22 17 22Z"
                fill="#333333"
              />
            </svg>
          </div>
          {/* fivoret icon  */}
          <button
          onClick={addFevorite}
          className="p-1 rounded-full shadow-md"
        >
          <svg
            className="text-red"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
              fill={is_fevorite ? "red" : "#333"}
            />
          </svg>
        </button>
        </div>
      </div>
      <div className="flex items-center gap-2 text-[#959595] mt-3">
        <img src={subCategory} alt="category" className="w-5 " />
        <span>{product.category.category} </span>
        <img src={branch} alt="category" className="w-5 ml-2" />
        {/* <span>{product.category.sub_categories[0]?.category}</span> */}
        <img src={stare} alt="category" className="w-5 ml-2" />
        <span>{product.rate ?? 0}</span>
      </div>
      <div className="flex items-center gap-2 text-[#959595] mt-3">
        <img src={color} alt="category" className="w-5 " />
        <span>{product.category.category} </span>
        <img src={date} alt="category" className="w-5 ml-2" />
        {/* <span>{product.category.sub_categories[0].category}</span> */}
        <img src={comp} alt="category" className="w-5 ml-2" />
        <span>{product.brand?.name ?? "not found"}</span>
      </div>
      <div className="flex items-center gap-2 mt-3 flex-wrap">
        <img src={location} alt="category" className="w-5 " />
        {product.available_cities &&
          product.available_cities.map((city: any) => (
            <div
              key={city.id}
              className="px-2 py-1 border border-red text-red rounded-sm"
            >
              {city.name}
            </div>
          ))}
      </div>
      <div className="flex items-center gap-2 mt-3">
        <img src={irtc} alt="category" className="w-5 " />
        {product.tag && (
          <div
            style={{
              background: product.tag.color,
              color: product.tag.font_color,
            }}
            className={`py-2 px-1 rounded-sm text-sm bg-[${product.tag.color}] text-[${product.tag.font_color}]`}
          >
            {product.tag.tag ?? " not found"}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 mt-3">
        <img src={money} alt="category" className="w-5 " />
        {product.prices && (
          <div className="flex items-center gap-6">
            <div className="text-xs flex flex-col items-center border border-dark px-5 py-1 rounded-sm ">
              <p className="text-[#ACA9A9] font-medium">1 Day</p>
              <p>{product.prices.day_price ?? " not found"}</p>
            </div>
            <div className="text-xs flex flex-col items-center border border-dark px-5 py-1 rounded-sm ">
              <p className="text-[#ACA9A9] font-medium">7 Day</p>
              <p>{product.prices.week_price ?? " not found"}</p>
            </div>
            <div className="text-xs flex flex-col items-center border border-dark px-5 py-1 rounded-sm ">
              <p className="text-[#ACA9A9] font-medium">30 Day</p>
              <p>{product.prices.month_price ?? " not found"}</p>
            </div>
          </div>
        )}
      </div>
      {product.product_keywords && (
        <div className="flex items-center gap-2 mt-3 ">
          <img src={flowpite} alt="" className="w-5 " />
          <p className="text-dark text-xs sm:text-sm font-medium truncate xl:text-lg">
            {product.product_keywords}
          </p>
        </div>
      )}
      <div>
        <Link to={`/profile/${product.owner.id}`}>
        <img src={view} alt="" className="w-5 " />
        </Link>
      </div>
      <div className="w-full p-5">
        <CostumBtn value="Order Now" style="w-full" />
      </div>
    </div>
  );
};

export default Cart;
