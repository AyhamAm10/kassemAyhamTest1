import { createSlice } from '@reduxjs/toolkit'
import { productByCategory } from '../initialState/productByCategory';
import actions from "../action/productCategoryActions"

export const productByCategorySlice = createSlice({
    name: "productByCategory",
    initialState: productByCategory,
    reducers:actions
})

export const {getProductByCategory} = productByCategorySlice.actions
export default productByCategorySlice.reducer;