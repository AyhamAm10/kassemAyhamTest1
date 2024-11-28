import { axiosClaint, endPoints } from "../API__information_conect"

export const useGetCompanyApi = async(id:string | undefined)=>{
    const res =await axiosClaint.get(endPoints.get.gitProdile + id )
    return res.data
}


// export default useGetCompanyApi