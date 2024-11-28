import { createSlice } from '@reduxjs/toolkit'
import { categoryState } from '../initialState/category'
import actions from "../action/categoryAction"


export const categorySlice = createSlice({
    name: "category",
    initialState: categoryState,
    reducers:actions
})

export const {getCategoryApi} = categorySlice.actions
export default categorySlice.reducer;