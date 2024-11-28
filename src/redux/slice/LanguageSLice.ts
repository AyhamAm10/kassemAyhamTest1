import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  language: "en" | "ar";
  direction: "ltr" | "rtl";
}

const initialState: LanguageState = {
  language: "en",
  direction: "ltr",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"en" | "ar">) => {
      state.language = action.payload;
      state.direction = action.payload === "ar" ? "rtl" : "ltr";
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
