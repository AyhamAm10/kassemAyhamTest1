type props = {
    img: string ,
    name: string,
    border?: string ,
    title: string
}

const BtnPartners:React.FC<props> = ({img , name , title , border}) => {
  return (
    <div className={`flex gap-2 items-center px-3 py-2 rounded-md border border-[${border}] w-fit`}>
        <img src={img} alt={name} />
        <div>
            <h3 className="text-dark text-xs md:text-sm "> {title} </h3>
            <h2 className="text-dark  md:text-2xl  font-medium ">{title} </h2>
        </div>
    </div>
  )
}

export default BtnPartners