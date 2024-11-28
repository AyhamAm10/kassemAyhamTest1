import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const myProductsSlice = createSlice({
    name: "my products",
    initialState : {
        data: null
    },
    reducers: {
        setProductsProfile: (_state, action: PayloadAction<any>) => {
                return {data: action.payload}
        }
    },
});

export const { setProductsProfile } = myProductsSlice.actions;

export default myProductsSlice.reducer;
