import React from "react";

interface prop {
    value: string ,
    style?: string ,
    fn?: ()=> void
}

const CostumBtn:React.FC<prop> = ({value , style , fn}) => {
  return (
    <button onClick={fn} className={`rounded-md text-white  px-10 py-3 bg-gradient-to-r from-red to-yalwe font-bold text-sm  ${style}`}>{value}</button>
  );
};

export default CostumBtn;
