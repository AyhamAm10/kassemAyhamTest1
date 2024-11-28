import { axiosClaint, endPoints } from "../API__information_conect"

export const useGetProductDetails = async(id:string | undefined)=>{
      const res =  await axiosClaint.get(`${endPoints.get.productDetails}${id}`)
      return res.data   
}
