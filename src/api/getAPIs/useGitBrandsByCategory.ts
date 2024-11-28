
import { AxiosResponse } from "axios"
import { ApiUrlDev, axiosClaint, endPoints } from "../API__information_conect"


export const useGetBrands:(id: string) => Promise<AxiosResponse<any, any> | undefined> = async(id:string)=>{
    const endPoint = endPoints.get.prandGategory.replace("{categoryid}" , id)
    console.log(endPoint)
    try {
        const res =await axiosClaint.get(ApiUrlDev + endPoint)
        return res
    } catch (error) {
        console.log(error)
    }

}