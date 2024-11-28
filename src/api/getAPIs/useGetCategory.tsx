
import { axiosClaint, endPoints } from "../API__information_conect"

export const useGetCategoryApi = async()=>{
    try {
      const res =  await axiosClaint(endPoints.get.category)
      console.log(res.data)
      return res.data
    } catch (error) {
        console.log(error)
    }
}
