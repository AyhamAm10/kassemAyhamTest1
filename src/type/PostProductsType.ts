export interface Discount {
    type: string;
    value: number;
}

export interface Attribute {
    color: string;
    size: string;
}

// export interface City {
//     city_id: number;
//     city_name: string;
// }

export interface Image {
    name: string;
    url: string;
}

// export interface ProductFormState {
//     product_id: string ;
//     is_renting_support: "support" | "not_support";
//     is_selling_support: "support" | "not_support";
//     category_id: number | null;
//     sub_category_id: number | null;
//     address_id: number | null;
//     title: string;
//     description: string;
//     item_price: number | null;
//     tag_id: number | null;
//     quantity: number | null;
//     renting_mode: string;
//     day_price: number | null;
//     week_price: number | null;
//     month_price: number | null;
//     unit_price: number | null;
//     delivery_fees: number | null;
//     vendor_delivery_support: boolean;
//     min_rental_days: number | null;
//     min_rental_units: number | null;
//     renting_unit_id: number | null;
//     brand_id: number | null;
//     rent_to_buy: boolean;
//     subscription_id: number | null;
//     discounts: Discount[];
//     attributes: Attribute[];
//     cities: string[];
//     images: File[];
// }

export interface ProductFormState {
    product_id?: string;
    is_renting_support: "support" | "not_support";
    is_selling_support: "support" | "not_support";
    category_id: string | null; // UUID
    sub_category_id: string | null; // UUID
    address_id: string | null; // UUID
    title: string;
    description: string;
    item_price: number | null;
    tag_id: string | null; // UUID
    quantity: number | null;
    renting_mode: "day" | "week" | "month" | ""; // Restrict possible values
    day_price: number | null;
    week_price: number | null;
    month_price: number | null;
    unit_price: number | string;
    delivery_fees: number | null;
    vendor_delivery_support: boolean;
    min_rental_days: number | null;
    min_rental_units: number | null;
    renting_unit_id: string | null; // UUID
    brand_id: string | null; // UUID
    rent_to_buy: string;
    subscription_id: string | null; // UUID
    discounts: Discount[]; // Array of custom type for discounts
    attributes: Attribute[]; // Array of custom type for attributes
    cities: City[]; // Changed from string[] to structured objects
    images: File[]; // Assuming the files are uploaded as a binary array
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
  
