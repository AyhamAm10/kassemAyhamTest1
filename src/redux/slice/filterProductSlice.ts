import { createSlice } from '@reduxjs/toolkit'
import { filterProduct } from '../initialState/filterProductState';
import actions from "../action/filterProduct"

export const filterProductSlice = createSlice({
    name: "productByCategory",
    initialState: filterProduct,
    reducers:actions
})

export const {getProductsFiltering} = filterProductSlice.actions
export default filterProductSlice.reducer;