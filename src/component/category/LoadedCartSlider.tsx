import React from "react";

const ShimmerCard: React.FC = () => {
  return (
    <div className="p-4 animate-pulse w-40 flex flex-col items-center gap-4">
      <div className="rounded-lg h-32 w-full  bg-[#d6d6d67d]  "/>
      <div className="rounded-lg h-4 w-20  bg-[#d6d6d67d]  "/>
    </div>
    
  );
};

export default ShimmerCard;
