export type searchReq = {
  attributes: any[];
  brand_id:string;
  category_id: string;
  cities: null | {id : string}[];
  city_id: string;
  is_popular: boolean;
  is_renting_support: string;
  is_selling_support: string;
  key_words: string;
  sorting: string;
  sub_category_id: string;
  tag_id: string;
};
