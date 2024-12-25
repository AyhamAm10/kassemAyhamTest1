import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  language: string; 
  direction: "ltr" | "rtl"; 
}

const initialState: LanguageState = {
  language: localStorage.getItem("YJOZ_lang") || "en", 
  direction: localStorage.getItem("YJOZ_dir") as ( "rtl" | "ltr") ||"ltr", 
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (
      state,
      action: PayloadAction<{ language: string; direction: "ltr" | "rtl" }>
    ) => {
      state.language = action.payload.language; 
      state.direction = action.payload.direction; 
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
