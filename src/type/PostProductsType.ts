export interface Discount {
  unit_count: number;
  discount_price: number;
}

export interface Attribute {
    color: string;
    size: string;
}

export interface Image {
    name: string;
    url: string;
}


export interface ProductFormState {
    product_id?: string;
    is_renting_support: "support" | "not_support";
    is_selling_support: "support" | "not_support";
    category_id: string | null; 
    sub_category_id: string | null; 
    address_id: string | null; 
    title: string;
    description: string;
    item_price: number | null;
    tag_id: string | null; 
    quantity: number | null;
    renting_mode: "day" | "unit" ;
    day_price: number | null;
    week_price: number | null;
    month_price: number | null;
    unit_price: number | string;
    delivery_fees: number | null;
    vendor_delivery_support: boolean;
    min_rental_days: number | null;
    min_rental_units: number | null;
    renting_unit_id: string | null; 
    brand_id: string | null; 
    rent_to_buy: string;
    subscription_id: string | null; 
    discounts: Discount[]; 
    attributes: Attribute[]; 
    cities: City[]; 
    images: File[]; 
  }
  
  export interface Discount {
    id: string; // UUID
    value: number; // Percentage or fixed amount
    type: string; // Make this consistent across the codebase
  }
  
  export interface Attribute {
    id: string; // UUID
    name: string;
    value: string | number | boolean; // Generalize for multiple data types
  }
  
  export interface City {
    id: string; // UUID
    name: string;
  }
  
