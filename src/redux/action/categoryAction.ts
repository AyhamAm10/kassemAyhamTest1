import { PayloadAction } from "@reduxjs/toolkit"
import { categorysType } from "../../type/reduxType"

export default {
    getCategoryApi : (state: categorysType, action: PayloadAction<any>) =>{
        if(action.payload){
            const obj = {
                category : action.payload 
            }
            return obj
        }
        return state
    } ,
    
}