import React from "react";

interface props {
    img: string ,
    title: string,
    desc: string
}
const ContactUsCard:React.FC<props> = ({img , title , desc}) => {
  return (
    <div className="p-3 sm:p-5 md:p-7  bg-white rounded-md shadow-lg flex items-center gap-14 md:gap-16 justify-between">
      <div className="flex items-center gap-4">
        <img src={img} alt="email icon " className=" w-10" />
        <h1 className="font-semibold">{title}</h1>
      </div>
      <p className="text-ofblack font-normal ">{desc}</p>
    </div>
  );
};

export default ContactUsCard;
