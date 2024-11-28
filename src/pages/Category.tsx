import { useEffect, useState } from "react";
import Select from "../component/category/Select";
import CartSlider from "../component/category/CartSlider";
import Slider from "../component/category/Slider";
import CitySelect from "../component/category/CitySelect";
import CategorySelected from "../component/category/CategorySelected";
import TagSelected from "../component/homePage/TagSelected";
import { useDispatch, useSelector } from "react-redux";
import { getProductsFiltering } from "../redux/slice/filterProductSlice";
import CartSlide from "../component/homePage/CartSlider";
import { useSearchApi } from "../api/postAPIs/useSearchApi";
import { searchReq } from "../type/requseteType";
import Search from "../component/category/Search";
import LoadedCartSlided from "../component/category/LoadedCartSlider";
import LoadedProducts from "../component/category/LoadedProducts";
import Pagination from "../component/category/Pagination";
import { isLoadedApi, notLoadedApi } from "../redux/slice/searchApiIsLoaded";
// import Brands from "../component/category/Brands";
import { useGetBrands } from "../api/getAPIs/useGitBrandsByCategory";
import { addAttribute } from "../redux/slice/searchApiSlice";

const Category = () => {
  const [subCategory, setSubCategory] = useState<any[] | null>(null);
  const [selectedValue, setSelectedValue] = useState("Sort");
  const [page, setPage] = useState<number>(1);
  const [totlePage, setTotalPage] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoaing] = useState<boolean>(false);
  const [selectedcategory, setSelectedCategory] = useState<any>(null);

  const productsFiltering = useSelector(
    (state: any) => state.filterProductSlice?.productsFiltering
  );

  const bodyReq: searchReq = useSelector((state: any) => state.searchSlice);

  const loadedApi: boolean = useSelector(
    (state: any) => state.searchLoadedSlice
  );

  const handelSearch = async () => {
    setLoaing(true);
    dispatch(isLoadedApi());
    try {
      const res = await useSearchApi(page.toString(), bodyReq);
      if (res) {
        dispatch(getProductsFiltering(res.data.data));
        setTotalPage(res.data.pagination.total);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoaing(false);
      dispatch(notLoadedApi());
    }
  };

  useEffect(() => {
    handelSearch();
    console.log(bodyReq);
  }, [page, bodyReq]);

  const handleSelectChange = (newValue: string) => {
    setSelectedValue(newValue);
    dispatch(addAttribute({sorting:newValue}))
    console.log(selectedValue)

  };

  const handleSlider = (id: number) => {
    const newData = subCategory?.map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    );
    if (newData) {
      setSubCategory(newData);
    }
  };

  const arr = new Array(10).fill("");

  const handlePageClick = (newPage: number) => {
    setPage(newPage);
  };

  // git brands by category
  useEffect(() => {
    if (selectedcategory) {
       useGetBrands(selectedcategory[0]?.id);
      //  Don't forget to add the brand to the page.
    }
  }, [selectedcategory]);

  return (
    <div className="py-4 px-3 sm:px-6 md:px-9 lg:px-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <Search />
        <div className="flex items-center gap-2 sm:gap-5 flex-wrap ">
          <CitySelect />
          <CategorySelected
            setSubCategory={setSubCategory}
            setLoaded={setLoaded}
            selectedValueId={selectedcategory}
            setSelectedValueId={setSelectedCategory}
          />
        </div>
      </div>
      <div className="py-4 ">
        <div className="md:hidden">
          <Slider
            data={subCategory}
            Component={!loaded ? CartSlider : LoadedCartSlided}
            sliderFn={handleSlider}
            plusNumber={true}
          />
        </div>
        <div className="max-w-[1000px]  gap-6 mt-5 hidden md:flex flex-wrap">
          {subCategory &&
            subCategory.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  handleSlider(item.id);
                }}
              >
                <CartSlider data={item} />
              </div>
            ))}

          {loaded &&
            [1, 2, 3, 4, 5].map((item) => <LoadedCartSlided key={item} />)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-12 gap-5 md:mt-5 ">
        <div className="md:col-span-7 ">

          {/* <Brands /> */}
        </div>
        <div className="flex items-center gap-2 md:col-span-5 sm:gap-5 flex-wrap">
          <Select
            value={selectedValue}
            data={["high_to_low", "low_to_high" , "popular" , "newest"]}
            onChange={handleSelectChange}
          />
          <TagSelected />
        </div>
      </div>

      {productsFiltering && !loadedApi && (
        <div className="mt-5 sm:mt-10 hidden md:flex flex-wrap justify-evenly lg:justify-normal  gap-5 lg:gap-8 xl:gap-10 ">
          {productsFiltering.map((data: any, index: number) => (
            <CartSlide key={index} data={data} />
          ))}
        </div>
      )}
      {loading && (
        <div className="mt-5 sm:mt-10 hidden md:grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5 lg:gap-8 xl:gap-10">
          {arr.map((data: any, index: number) => (
            <LoadedProducts key={data?.id || index}   />
          ))}
        </div>
      )}
      <div className="block md:hidden ">
        <Slider
          data={productsFiltering ?? null}
          Component={productsFiltering ? CartSlide : LoadedProducts}
          plusNumber={false}
        />
      </div>

      <div className="flex-center my-5 sm:my-10 ">
        <Pagination
          onPageChange={handlePageClick}
          currentPage={page}
          totalPages={totlePage}
        />
      </div>
    </div>
  );
};

export default Category;
