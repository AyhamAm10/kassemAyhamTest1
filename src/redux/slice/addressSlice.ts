import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type userAdreessType =  {
  id: string;
  city: string;
  label: string;
  address: string;
  latitude: string;
  longitude: string;
  street : string;
  is_default: boolean;
  is_location_fetched: boolean;
  is_editable: boolean
} 

const initialState: userAdreessType = {
    id: "",
    city: "",
    label: "",
    address: "",
    latitude: "",
    longitude: "",
    street : "",
    is_default: false,
    is_location_fetched: true,
    is_editable: true
};

const addAddressSlice = createSlice({
  name: 'addAddress',
  initialState,
  reducers: {
    updateFieldAddress: (
        state:any,
        action: PayloadAction<{ field: keyof userAdreessType; value: any }>
      ) => {
        state[action.payload.field] = action.payload.value;
      },
      addAddressData : (state:userAdreessType ,  action: PayloadAction<userAdreessType>)=>{
        return {...state , ...action.payload }
      }
  },
});

export const { updateFieldAddress , addAddressData } = addAddressSlice.actions;
export default addAddressSlice.reducer;
