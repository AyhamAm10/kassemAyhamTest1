import React from "react";
import BodyChat from "./BodyChat";

type props = {
  data: any;
};

const ChatingComponent: React.FC<props> = ({ data }) => {
  return (
    <div className="w-full h-full bg-white rounded-md">
      {data && (
        <>
          {/* header chat  */}
          <div className="flex items-center gap-3 px-5 sm:px-7 lg:px-9 py-3 border-b border-ofwhite">
            <button className="w-16 h-16 rounded-full border-p border  text-white  flex-center overflow-hidden">
              <img src={data.user.image} alt="profile image" />
            </button>
            <h2 className="font-medium text-lg sm:text-xlg lg:text-2xl text-dark ">
              {`${data.user.first_name} ${data.user.last_name}`}
            </h2>
          </div>
          {/* body chating  */}
          <BodyChat />
        </>
      )}
    </div>
  );
};

export default ChatingComponent;
