
import { Link } from "react-router-dom";

import PaginatedProducts from "../../component/ProfilePages/item/ProductsItems";

const Items = () => {

  // const [page , _setPage] = useState<number>(1)
  // const myProducts = useSelector((state:any)=>state.myProducts).data
  // const dispatch = useDispatch()

  // const {data} = useQuery({
  //   queryKey:["get my products"],
  //   queryFn:()=>getUserProduct(page),
  //   staleTime: LongStaleTime,
  //   refetchOnWindowFocus: false,
  //   refetchOnReconnect: false,
  //   refetchInterval: false,
  // })

  // useEffect(()=>{
  //   if(data){
  //     console.log(myProducts)
  //     dispatch(setProductsProfile(data.data))
  //   }
  // },[data])


  return (
    <section className=" sm:px-16 xl:px-0">
      <div className="flex items-start justify-between sm:col-span-2">
        <div className="text-dark text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold">
          <h1>My Items</h1>
          <p className="text-[#B0B0B0] text-xs md:text-sm leading-4 font-normal my-4 sm:my-7">View and Manage items you wish to rent</p>
        </div>
        <Link to={"/account/add_item"}>
        
        <button
          type="submit"
          className="rounded-md hidden sm:block text-white px-4 py-3 bg-gradient-to-r from-red to-yalwe font-bold text-sm"
        >
          Add New Item
        </button>
        </Link>
      </div>
      <PaginatedProducts />
      {/* <div>
        {
          myProducts?.map((item:any)=>(
            <CartSlider data={item} />
          ))
        }
      </div> */}
    </section>
  );
};

export default Items;
