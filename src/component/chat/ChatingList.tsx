import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { setChat } from "../../redux/slice/chatSlice";

type props = {
    data : any ;
    setActiveChating: Dispatch<any | null>
}
const ChatingList:React.FC<props> = ({data , setActiveChating}) => {
    const Dispatch = useDispatch()
    const handleSelect = (item:any)=>{
        setActiveChating(item)
        Dispatch(setChat({channel_name:item.channel_name}))
    }
  return (
    <div className="flex-col flex gap-3 sm:gap-5 p-2 sm:p-3 rounded-md  items-center bg-white h-[90%] ">
        {
            data?.data?.conversations?.map((item:any)=>(
                <button 
                className="w-16 h-16 rounded-full bg-p text-white  flex-center overflow-hidden" 
                key={item.user.id}
                onClick={()=>handleSelect(item)}
                >
                        <img src={item?.user.image} alt="profile image" />
                </button>
            ))
        }
    </div>
  )
}

export default ChatingList