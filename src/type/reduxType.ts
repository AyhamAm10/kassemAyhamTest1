export type categorysType = {
  category: categoryType[];
} | null;

export type categoryType = {
  category: string;
  created_at: string;
  id: string;
  ignore_set_color: boolean;
  image: string;
  sub_categories: {
    category: string;
    created_at: string;
    id: string;
    ignore_set_color: boolean;
    image: string;
    updated_at: string;
  }[];
};

interface SelectedCountry {
  country_ar: string;
  country_code: string;
  country_en: string;
  country_flag: string;
}

export interface UserProfile {
  about_me: string | null;
  accept_instant_orders: boolean;
  address: string | null;
  available_balance: number;
  business_name: string | "";
  country_code: string | null;
  cover_image: string | null;
  email: string;
  email_verified_at: string | null;
  favourites_count: number;
  first_name: string | null;
  has_delivery_rates: boolean;
  iban: string;
  iban_available: boolean;
  id: string;
  id_verified: string;
  image: string | null;
  last_name: string | null;
  phone_number: string;
  provider: string | null;
  public_id: string | null;
  rating: number;
  rating_count: number;
  selected_country: SelectedCountry;
  store_hours: any; 
  stripe_id: string | null;
  subscriptions: any[]; 
  user_status: string;
  working_hours: workingHoursType[]; 
}

export type workingHoursType = {
  id: string ,
  day : 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
  start_time: string,
  end_time: string,
  status: "active" | "inactive" | string
}
