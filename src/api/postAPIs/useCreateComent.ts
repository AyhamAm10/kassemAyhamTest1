import { AddNotification } from "../../utails/message";
import { axiosClaint, endPoints } from "../API__information_conect";

export const useCreateComment: (
  que: string,
  productId: string
) => Promise<void> = async (que, productId) => {
    try {
        await axiosClaint.post(endPoints.post.commint , {
         question:que,
         product_id:productId
        })
        AddNotification("success","Your comment has been sent." , "success")
    } catch (error) {
        AddNotification("error","Your comment has been sent." , "danger")
    }
};
