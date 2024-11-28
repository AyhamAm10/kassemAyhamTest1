import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfileState {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  country_code: string;
  selected_country: string;
  about_me: string;
}

const initialState: UserProfileState = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  country_code: '',
  selected_country: '',
  about_me: '',
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    updateField: (
        state,
        action: PayloadAction<{ field: keyof UserProfileState; value: string }>
      ) => {
        state[action.payload.field] = action.payload.value;
      },
  },
});

export const { updateField } = userProfileSlice.actions;
export default userProfileSlice.reducer;
