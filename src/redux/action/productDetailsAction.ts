import { PayloadAction } from "@reduxjs/toolkit"


export default {
    getProductDetails : (state: any, action: PayloadAction<any>) =>{
        if(action.payload){
            const obj = {
                productDetailsState : action.payload 
            }
            return obj
        }
        return state
    } ,
    
}