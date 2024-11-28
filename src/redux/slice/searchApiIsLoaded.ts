import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const searchLoadedSlice = createSlice({
  name: "search Loaded",
  initialState,
  reducers: {
    isLoadedApi: () =>  true ,
    notLoadedApi: () => false,
  },
});

export const { isLoadedApi , notLoadedApi } = searchLoadedSlice.actions;
export default searchLoadedSlice.reducer;
