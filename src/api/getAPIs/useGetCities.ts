
import { axiosClaint, endPoints } from "../API__information_conect"

export const getCities = async()=>{
    const res:any =await axiosClaint.get(endPoints.get.getCities)
    return res.data.data
}