import React from 'react'
import packteck from "../../assets/home/“.svg"
import img from "../../assets/home/Photo.png"
type props = {
    revers?: boolean
}
const SayCart:React.FC<props> = ({revers}) => {
  return (
    <div className={`flex w-[336px] gap-5 ${revers ?"flex-col-reverse": "flex-col " }  h-[500px]`}>
        <div className={`px-12 py-16 flex flex-col gap-6 w-full bg-[#2E3947] ${revers ? "rounded-tl-lg":"rounded-bl-lg"} h-3/4`}>
            <img src={packteck} alt="packteck" className=' w-[2rem]  left-0 top-0' />
            <div>
                <p className='text-white text-xl '>There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable.</p>
            </div>
        </div>
        <div className='flex items-center gap-3 max-w-[60%] h-1/4'>
            <img src={img} alt="personal photo" className='rounded-full' />
            <h1 className='text-dark text-3xl font-bold'>Julia Rose</h1>
        </div>
    </div>
  )
}

export default SayCart