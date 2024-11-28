
import star from "../../assets/profile/Star 1.png";
import img from "../../assets/profile/iconamoon_profile-fill.png";
const OwnerCart = () => {
  return (
    <div className="p-4 bg-white ">
      <div className="flex gap-2   items-center">
        <img src={img} alt="profile" />
        <h2 className="text-[#BABCC1] font-medium ">iconamoon_profile</h2>
        <p className="text-[#BABCC1] font-medium ">22/9/2024</p>
        <img src={star} alt="star" />
        <span className="font-medium text-dark">4</span>
      </div>
      <div className="max-w-80 mt-5 ">
        <p className="text-dark text-xs sm:text-sm text-wrap px-2 leading-6 pb-4 font-medium">
          Lorem ipsum dolor sit amet consectetur. Eleifend laoreet semper nec
          turpis donec habitasse praesent malesuada tellus. Rhoncus morbi
          placerat sagittis lacus tortor feugiat eget quisque. Faucibus
          fringilla nec varius sagittis aliquet.
        </p>
      </div>
    </div>
  );
};

export default OwnerCart;
