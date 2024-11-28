import { ProductFormState } from "../../type/PostProductsType";

export const initialState: ProductFormState = {
    // product_id: "-1",
    is_renting_support: "not_support",
    is_selling_support: "not_support",
    rent_to_buy: "not_support",
    category_id: null,
    sub_category_id: null,
    address_id: null,
    title: "",
    description: "",
    item_price: null,
    tag_id: null,
    quantity: null,
    renting_mode: "day",
    day_price: null,
    week_price: null,
    month_price: null,
    unit_price: "1",
    delivery_fees: null,
    vendor_delivery_support: false,
    min_rental_days: null,
    min_rental_units: null,
    renting_unit_id: null,
    brand_id: null,
    discounts: [],
    attributes: [],
    cities: [],
    images: [],
    subscription_id: ""

};
