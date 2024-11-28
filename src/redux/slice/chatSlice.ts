import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AddsubscribeType = {
    channel_name: string | null ;
}
const initialState:AddsubscribeType = {
    channel_name: null ,
}

const chatSlice = createSlice({
    name: "chatSlice",
    initialState,
    reducers: {
      setChat: (state, action: PayloadAction<Partial<AddsubscribeType>>) => {
        return { ...state, ...action.payload };
    },
    },
  });
  
  export const { setChat } = chatSlice.actions;
  export default chatSlice.reducer;