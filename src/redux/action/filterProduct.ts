import { PayloadAction } from "@reduxjs/toolkit"


export default {
    getProductsFiltering : (state: any, action: PayloadAction<any>) =>{
        if(action.payload){
            const obj = {
                productsFiltering : action.payload 
            }
            return obj
        }
        return state
    } ,
}