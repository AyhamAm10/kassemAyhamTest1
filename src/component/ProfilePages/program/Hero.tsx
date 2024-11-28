import img1 from "../../../assets/profilePage/program/icon1.svg"
import img2 from "../../../assets/profilePage/program/icon2.svg"
import img3 from "../../../assets/profilePage/program/icon3.svg"
import img4 from "../../../assets/profilePage/program/icon4.svg"


type iconListType = {
  number: string;
  icon: string;
  title: string;
}

const Hero = () => {

  const iconList:iconListType[] = [
    {
        number : '01' ,
        icon : img1 ,
        title : "Share"
    },
    {
        number : '02' ,
        icon : img3 ,
        title : "Registration "
    },
    {
        number : '03' ,
        icon : img2 ,
        title : "WE PROCEED "
    },
    {
        number : '04' ,
        icon : img4 ,
        title : "YOU GET "
    }
]

  return (
    <section className='bg-gradient-to-r from-yalwe via-red to-yalwe rounded-md py-3 sm:py-6 md:py-8 px-2 sm:px-4 flex flex-col items-center '>
        <p className=' sm:text-xl lg:text-[2rem] font-bold text-[#ECECEC]'> Refer and earn up to 200$</p>
        <div className='mt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-around'>
            {
                iconList.map((item:iconListType)=>(
                    <div key={item.number} className='flex flex-col items-center justify-between'>
                        <img src={item.icon} alt={item.title}  />
                        <div className='text-whitesm:text-lg md:text-xl mt-2 text-white flex items-center gap-2'>
                            <span className='  font-semibold '>{item.number}</span>
                            {item.title}
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Hero