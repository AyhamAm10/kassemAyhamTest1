import { searchReq } from "../../type/requseteType"
import { ApiUrl, axiosClaint, endPoints } from "../API__information_conect"

export const useSearchApi = async (page:string , req: searchReq)=>{
    const res = await axiosClaint.post(`${ApiUrl + endPoints.post.filter_product}?page=${page}` , req)
    console.log(res)
    return res
}