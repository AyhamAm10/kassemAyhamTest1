import { createSlice } from '@reduxjs/toolkit'
import actions from "../action/productDetailsAction"
import { productDetailsState } from '../initialState/productDetails';

export const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState: productDetailsState,
    reducers:actions
})

export const {getProductDetails} = productDetailsSlice.actions
export default productDetailsSlice.reducer;