import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const AgreeForAddProduct = createSlice({
  name: "search Loaded",
  initialState,
  reducers: {
    
    setAgree: (state:boolean) => !state,
  },
});

export const { setAgree } = AgreeForAddProduct.actions;
export default AgreeForAddProduct.reducer;