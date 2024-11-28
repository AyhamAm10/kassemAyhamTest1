import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchReq } from "../../type/requseteType";

const initialState: searchReq = {
    attributes: [],
    brand_id: '',
    category_id: '',
    cities: null,
    city_id: '',
    is_popular: false,
    is_renting_support: '',
    is_selling_support: '',
    key_words: '',
    sorting: '',
    sub_category_id: '',
    tag_id: '',
  };

  const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addAttribute: (state, action: PayloadAction<Partial<searchReq>>) => {
            return { ...state, ...action.payload };
      },
        addNewFiltering: (_state, action: PayloadAction<Partial<searchReq>>) => {
            return {
                ...initialState , 
                ...action.payload
            }
        }
    },
  });


  export const {addAttribute , addNewFiltering} = searchSlice.actions
  export default searchSlice.reducer;