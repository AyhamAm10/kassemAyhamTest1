import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../initialState/createProductState";
import { ProductFormState } from "../../type/PostProductsType";
const productFormSlice = createSlice({
    name: "productForm",
    initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<Partial<ProductFormState>>) => {
            return { ...state, ...action.payload };
        },
        resetForm: () => initialState,
    },
});

export const { setFormData, resetForm } = productFormSlice.actions;

export default productFormSlice.reducer;
