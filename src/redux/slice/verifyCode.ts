import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type verifyType = {
  phoneNumber: string,
  email: string,
  normal : string
}

const initialState: verifyType = {
  phoneNumber: "",
  email: "",
  normal : "true"
  };

  const verifySlice = createSlice({
    name: 'verifySlice',
    initialState,
    reducers: {
        bodyReqVerify: (state, action: PayloadAction<Partial<verifyType>>) => {
            return { ...state, ...action.payload };
      }
    },
  });


  export const {bodyReqVerify } = verifySlice.actions
  export default verifySlice.reducer