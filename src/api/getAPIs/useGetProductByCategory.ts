

import { axiosClaint, endPoints } from "../API__information_conect"

export const useGetProductByCategory = async()=>{
    try {
      const res =  await axiosClaint.get(endPoints.get.popularProductsByCategory)
      return res.data
    } catch (error) {
        console.log(error)
    }
}
