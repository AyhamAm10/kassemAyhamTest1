import axios from "axios";
import { axiosClaint, endPoints } from "../API__information_conect";


export const fetchMessages = async (channel: string) => {
    const data = {
        channel_name : channel
    }
  const response = await axios.post(endPoints.post.get_message, data);
  return response.data;
};

export const sendMessage = async (channel: string, message: string, userId: string) => {
  const response = await axiosClaint.post(endPoints.post.sentMesssage, {
    channel,
    message,
    userId,
  });
  return response.data;
};

// export const fetchAllConversations = async () => {
//   const response = await axiosClaint.get(endPoints.get.all_conversations);
//   return response.data;
// };
