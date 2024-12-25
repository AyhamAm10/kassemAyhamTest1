
import FavoritesProducts from "../../component/ProfilePages/Favorites/FavoritesProducts"
const Favorites = () => {

  // const  fitchData = async ()=>{
  //   const res:any =await axiosClaint.get(endPoints.get.getFevorite)

  //     return res.data

  // }

  // const { data, isLoading } = useQuery<unknown, Error, {data:any} | null, QueryKey>({
  //   queryKey: ["favorite api "],
  //   queryFn: fitchData,
  //   staleTime: LongStaleTime,
  //   refetchOnWindowFocus: false,
  //   refetchOnReconnect: false,
  //   refetchInterval: false,
  // });



  return (
    <section className="sm:px-16 xl:px-0">
    {/* <div className="flex items-start justify-between sm:col-span-2">
      <div className="text-dark text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold">
        <h1>Favorites</h1>
        <p className="text-[#B0B0B0] text-xs md:text-sm leading-4 font-normal my-4 sm:mt-7">View and Manage your favotire</p>
      </div>
    </div>
    <div>
      {
        isLoading && 
        <div className="flex-center w-full">
          <Loader />
        </div>
      }

      {
        <div>
          <div className="grid  lg:max-w-[90rem] grid-cols-1 sm:grid0-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around mx-auto gap-3 sm:gap-8  ">
            {
              data?.data.map((item:any)=>(
                  <CartSlider data={item} />
              ))
            }
            
          </div>
        </div> 
      }
    </div> */}
    <FavoritesProducts />
  </section>
  )
}

export default Favorites