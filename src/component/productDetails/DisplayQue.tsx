import img from "../../assets/productDetails/defaulteImg.svg"

type props = {
    data: any
}
const DisplayQue:React.FC<props> = ({data}) => {
    console.log(data)
  return (
    <div className="p-4 bg-white rounded-md w-full">
        <div className="text-[#BABCC1] text-sm font-medium flex items-center gap-3">
            <img src={data.user.image?? img} alt="user" />
            <p>
                {data.user.first_name} {data.user.last_name}
            </p>
            <p>
                {data.created_at.split("T")[0]}
            </p>
        </div>
        <p className="text-[#BABCC1] text-lg sm:text-2xl my-4 font-medium flex items-center gap-3">Q: {data.question}</p>
    </div>
  )
}

export default DisplayQue