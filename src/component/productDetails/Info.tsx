import { useState } from "react";
import Description from "./Description";
import Location from "./Location";
import Comment from "./Comment";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
const Info: React.FC<{
  refetch: (options?: RefetchOptions) => Promise<
    QueryObserverResult<
      {
        data: any[];
      },
      Error
    >
  >;
}> = ({refetch}) => {
  const [page, setPages] = useState([
    {
      id: 0,
      title: "Description",
      component: Description,
      active: true,
      hasRefetch:false
    },
    {
      id: 1,
      title: "Location",
      component: Location,
      active: false,
      hasRefetch: false
    },
    {
      id: 2,
      title: "Comment",
      component: Comment,
      hasRefetch: true,
      active: false,
    },
  ]);

  const handleClick: (id: number) => void = (id) => {
    const newPage = page.map((item) =>
      id === item.id ? { ...item, active: true } : { ...item, active: false }
    );
    setPages(newPage);
  };
  return (
    <div className="w-full px-2 sm:px-5 md:px-10 lg:px-14 py-5 xl:max-w-[55rem] lg:max-w-[50rem]  ">
      <ul className="w-full flex-col gap-y-8 flex sm:flex-row items-center justify-between">
        {page.map((item) => (
          <li
            key={item.id}
            className={`${
              item.active
                ? "border-b-2 border-b-red text-red sm:border-none py-5 px-9 sm:p-0"
                : "text-[#A1A1A1]"
            } text-[28px] cursor-pointer`}
            onClick={() => {
              handleClick(item.id);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <hr className="border-black border-1 w-full my-5" />
      <div className=" py-5">
        {page.map((item) =>
          item.active ? <item.component key={item.id} refetch={refetch} /> : null
        )}
      </div>
    </div>
  );
};

export default Info;
