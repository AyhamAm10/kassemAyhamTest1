import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfile } from "../../type/reduxType";

export const initialState: UserProfile | null = null;
// {
//   about_me: null,
//   accept_instant_orders: false,
//   address: null,
//   available_balance: 0,
//   business_name: "",
//   country_code: null,
//   cover_image: null,
//   email: "",
//   email_verified_at: null,
//   favourites_count: 0,
//   first_name: null,
//   has_delivery_rates: false,
//   iban: "",
//   iban_available: false,
//   id: "",
//   id_verified: "not_started",
//   image: null,
//   last_name: null,
//   phone_number: "",
//   provider: null,
//   public_id: null,
//   rating: 0,
//   rating_count: 0,
//   selected_country: {
//     country_ar: "",
//     country_code: "",
//     country_en: "",
//     country_flag: "",
//   },
//   store_hours: null,
//   stripe_id: null,
//   subscriptions: [],
//   user_status: "active",
//   working_hours: [],
// };

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile(state:any, action: PayloadAction<UserProfile>) {
      if (!state) {
        return action.payload;
      }
      return { ...state, ...action.payload };
    },
    resetUserProfile() {
      return initialState;
    },
  },
});

export const { setUserProfile, resetUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
