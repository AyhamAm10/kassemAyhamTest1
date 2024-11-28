import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";
import productByCategorySlice from "./slice/ProductByCategoru";
import productDetailsSlice from "./slice/ProductDetailsSlice";
import filterProductSlice from "./slice/filterProductSlice";
import searchSlice from "./slice/searchApiSlice";
import searchLoadedSlice from "./slice/searchApiIsLoaded";
import verifySlice from "./slice/verifyCode";
import userProfileSlice from "./slice/userProfileSlice";
import addAddressSlice from "./slice/addressSlice";
import productFormSlice from "./slice/createProjectSlice";
import setDataVerifyCode from "./slice/setDataVerifyCode"
import updatedAddress from "./slice/updatedAddressSlice"
import chatSlice from "./slice/chatSlice";
import myProducts from "./slice/myProductsSlice"
import AgreeForAddProduct from './slice/AgreeForAddProduct'
export const store = configureStore({
  reducer: {
    categorySlice,
    productByCategorySlice,
    productDetailsSlice,
    filterProductSlice,
    searchSlice,
    searchLoadedSlice,
    verifySlice,
    userProfileSlice,
    addAddressSlice,
    productFormSlice,
    setDataVerifyCode,
    updatedAddress,
    chatSlice,
    myProducts,
    AgreeForAddProduct
  },
});

export type StoreType = ReturnType<typeof store.getState>;
