import React from 'react'
import { useDispatch } from 'react-redux'
import { addAttribute } from '../../redux/slice/searchApiSlice'

type props = {
    data : {
        id: number ;
        title: string ;
        active: boolean;
        image: string
    }
}
const CartSlider:React.FC<props> = ({data}) => {
    const dispatch = useDispatch()
  return (
    <button 
    onClick={()=>{
        dispatch(addAttribute({sub_category_id : data.id.toString()}))
    }}
    className='rounded-md overflow-hidden w-32 shadow-md  '>
        <div className={` p-2 ${data.active? "bg-gradient-to-r from-red to-yalwe": "bg-white border border-ofwhite"} flex-center min-h-[50px] `}> 
            <img src={data.image} height={50} width={50} alt="icon" />
        </div>
        <div className='flex-center py-2   bg-white'>
            <h3 className={`${data.active ? "text-dark": "text-[#B5B5B5]"} font-medium truncate `}>
                {data.title}
            </h3>
        </div>
    </button>
  )
}

export default CartSlider