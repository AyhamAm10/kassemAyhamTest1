import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {} ;

  const setDataVerifyCode = createSlice({
    name: 'verifySlice',
    initialState,
    reducers: {
        setVerifyInfo: (state, action: PayloadAction<Partial<any>>) => {
            return { ...state, ...action.payload };
      }
    },
  });


  export const {setVerifyInfo } = setDataVerifyCode.actions
  export default setDataVerifyCode.reducer