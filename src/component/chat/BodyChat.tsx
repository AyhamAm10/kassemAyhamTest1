// import { QueryKey, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import {
//   axiosClaint,
//   endPoints,
//   LongStaleTime,
// } from "../../api/API__information_conect";
// import Loader from "../layout/Loader";
import { fetchMessages } from "../../api/chatApi/chat";
import pusher from "../../utails/pusher_client";

interface Message {
    id: string;
    content: string;
    senderId: string;
    timestamp: string;
  }

const BodyChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [_newMessage, _setNewMessage] = useState<string>("");

    const channel_name = useSelector(
        (state: any) => state.chatSlice.channel_name
      );

    useEffect(() => {
        const loadMessages = async () => {
          const data = await fetchMessages(channel_name);
          setMessages(data);
        };
    
        loadMessages();
    
        const channel = pusher.subscribe(channel_name);
        channel.bind("message", (message: Message) => {
          setMessages((prevMessages) => [...prevMessages, message]);
        });
    
        return () => {
          pusher.unsubscribe(channel_name);
        };
      }, [channel_name]);


  console.log(channel_name);

//   const { data, isLoading, refetch } = useQuery<
//     unknown,
//     Error,
//     { data: any },
//     QueryKey
//   >({
//     queryKey: ["get message api"],
//     queryFn: () => fetchMessages(channel_name),
//     // enabled: !channel_name,
//     staleTime: LongStaleTime,
//     refetchOnWindowFocus: false,
//     refetchOnReconnect: false,
//     refetchInterval: false,
//   });

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <div>
      {/* {isLoading && (
        <div className="w-full h-full flex-center">
          <Loader />
        </div>
      )} */}
    </div>
  );
};

export default BodyChat;
