import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userAdreessType } from "./addressSlice";

type state = {
  data: userAdreessType | null;
  isUpdate: boolean;
};
const initialState: state = {
  data: null,
  isUpdate: false,
};

const updatedAddress = createSlice({
  name: "updatedAddress",
  initialState,
  reducers: {
    updateAddressAction: (state: any, action: PayloadAction<any>) => {
      return { ...state, data: { ...action.payload } };
    },
    isUpdatedAddress: (state: state) => {
      return {
        ...state,
        isUpdate: true,
      };
    },
    isNotUpdatedAddress: (state: state) => {
      return {
        ...state,
        isUpdate: false,
      };
    },
  },
});

export const { updateAddressAction, isUpdatedAddress, isNotUpdatedAddress } =
  updatedAddress.actions;
export default updatedAddress.reducer;
