import { QueryKey, useQuery } from "@tanstack/react-query";
import {
  axiosClaint,
  endPoints,
  LongStaleTime,
} from "../../api/API__information_conect";
import { useState } from "react";
import ChatingList from "../../component/chat/ChatingList";
import Loader from "../../component/layout/Loader";
import ChatingComponent from "../../component/chat/ChatingComponent";

const Chat = () => {
  const [activeChating, setActiveChating] = useState<null | any>(null);
  const getChating = async () => {
    const res = await axiosClaint(endPoints.get.all_conversations);
    return res.data;
  };

  const { data, isLoading } = useQuery<
    unknown,
    Error,
    { data: any } | null,
    QueryKey
  >({
    queryKey: ["get chating list api "],
    queryFn: getChating,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });


  return (
    <section className="sm:px-16 xl:px-0 h-[80vh] flex items-center gap-5 sm:gap-7 lg:gap-12">
      {isLoading && (
        <div className="w-full h-full flex-center ">
          <Loader />
        </div>
      )}
      {data && (
        <>
          <ChatingList data={data} setActiveChating={setActiveChating} />
          <ChatingComponent data={activeChating} />
        </>
      )}
    </section>
  );
};

export default Chat;
