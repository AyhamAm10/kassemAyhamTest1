import { AddNotification } from "../../utails/message"
import { axiosClaint, endPoints } from "../API__information_conect"

export const getUserProduct = async (page:number = 1)=>{
    try {
        const res =await axiosClaint.post(`${endPoints.post.user_products}??page=${page}`)
        return res.data
    } catch (error) {
        AddNotification("error" , "Please reload this page." , "danger")
    }
}