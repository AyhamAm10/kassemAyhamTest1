
import SliderLayout from "../layout/SliderLayout";
import OwnerCart from "./OwnerCart";

const OwnerReview = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-4 sm:py-6">
      <h1 className="text-dark font-semibold mb-2 text-xl sm:text-2xl md:text-3xl  lg:text-[2rem]">
        Owner Review
      </h1>
      <SliderLayout style=" flex mt-9 w-[90rem]   gap-4 sm:gap-6 md:gap-8 mx-auto">
        <OwnerCart />
        <OwnerCart />
        <OwnerCart />
        <OwnerCart />
      </SliderLayout>
    </section>
  );
};

export default OwnerReview;
