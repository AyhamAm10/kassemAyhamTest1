import { PayloadAction } from "@reduxjs/toolkit"


export default {
    getProductByCategory : (state: any, action: PayloadAction<any>) =>{
        if(action.payload){
            const obj = {
                productByCategory : action.payload 
            }
            return obj
        }
        return state
    } ,
    
}