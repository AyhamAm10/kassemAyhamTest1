import axios from "axios";

export const ApiUrlDev = "https://dev.yjoz.com/api/v5/";
export const ApiUrl = "https://api.yjoz.com/api/v6/";
export const stripePublishableKey="pk_test_51P7ELWRvhk3TCZc1uKSIP2rhH063yYPYwWgFO2gP3sL4IwszmTc8BdUyrurqjoF3AntJfKMRatFlBphySVfhAqHp00aUiWin3Z"
const validToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5OTNkZjU3ZS05OThiLTRmOTMtOWQxZS02YTNkNzQ0YTRkNDUiLCJqdGkiOiIxYWY2NWRiOTFmNDkwYjJmZGEwM2I2ZTE0NDRlNDBhNGFiZWNjNDlhOGI1MjE5ZjI5ZGY2MGNiMzI4MTU2OWVjNDNmMTZhMThlNTdiMjIwMyIsImlhdCI6MTczMjE4NDE3OC4wMDM4NTY4OTczNTQxMjU5NzY1NjI1LCJuYmYiOjE3MzIxODQxNzguMDAzODU5MDQzMTIxMzM3ODkwNjI1LCJleHAiOjE3NjM3MjAxNzcuOTk4NjI1OTkzNzI4NjM3Njk1MzEyNSwic3ViIjoiZTNlZTQ4ODEtYWM2ZS00YTQzLWI2MzctNjcwYTIzODJhYzVkIiwic2NvcGVzIjpbXX0.XfqKltd1cldF0Nejc5OvIlcoZwkfBZbUzlH6PoaegSdIpN2hIRX9HTz2wATDKShlwmXDr32j1JNCd8d24wr9u56DQtS2e1pqJ-Cpls9FxDDvT5fHfi6TjdzPPd3dltm637XunhLbUGr2uwsDjVlG9-NA0ZRmwKD2heAGk2g_97rBgvt9PhsC-GffjTw0rtX_S-6j0cCI7uh0H8a-cXJlp6bVydxbQdL-9Q6jI-s7z5-_ZjrKFoHU_uhARTqyDi2DYrAJjlknL-6A5KcR5h9UDIyiw9SrMIHz46v4m5oOfXJdoadKqhUP7vsscZljQL5o10U3cQXk2xduDSuXXXCsjNJhpfZ9LpwV6uIR9h858em6grE0-VtODFhGQHfUygLRHAEOYZ9LGR0KRtPmeFwB3jotJlfXUqYZv4aGC8pHpCVXN3VpiQ77tuR04w9Maog4ngJI9qtFqymLiFr-Ams9WEY_CUusZiLjfrshxvtOb9Lce-LAk94s8LFDUuaZOepHI-fSKDa4JlSyHUIHdTCdobpqzbLp3nUvF_aqqDilC6i_9HeQLqpxYsJG-o9znLNG0Pd8dT48HpBMJly9nHu1b4WsTXDiA7JkCmk1dnd01vXmfdM_0f6p1U5OxBTG_t4Z1zphriczZk5HeoKPPzgE0Lb4R7XpKdACFrNoNb9aGQ4"
export const endPoints = {
  get: {
    category: "get_available_categories",
    popularProducts: "get_popular_products",
    popularProductsByCategory: "get_popular_products_by_category",
    productDetails: "get_product_details/",
    filterProduct: "filter_product",
    prandGategory: "get_brands_by_category/{categoryid}",
    getCities: "get_cities",
    tags: "all_tags",
    getUserProfile: "get_user_profile",
    getAddrres: "get_address" ,
    Subscriptions:"get_subscriptions",
    payment : 'payment_methods',
    renting: "get_renting_units",
    getFevorite: "get_user_favorite?page=1",
    gitProdile: "get_profile/",
    settings : "settings",
    all_conversations: "get_all_conversations",
  },
  post: {
    filter_product: "filter_product",
    login: "login",
    signup: "signup",
    otp_verify: "otp_verify",
    editProfile: "edit_user_profile",
    AddFavorite : "add_to_favorite",
    removeFavorite : "remove_from_favorite",
    addAdrress : "add_address",
    userProducts: "user_products",
    deletedAddress: "delete_address",
    addProducts: "add_product",
    UpdateAddress: "edit_address",
    loguot : "logout",
    subscribe : "subscribe",
    sentMesssage: "send_message",
    pusher : "pusher_auth_web",
    get_message: "get_messages",
    commint : "ask_question",
    user_products:"user_products"

  },
};

export const axiosClaint = axios.create({
  baseURL: `${ApiUrl}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("YJOZ_token")} `
    Authorization: `Bearer ${validToken}`

  },
});

export const axiosClaintApi = axios.create({
  baseURL: `${ApiUrl}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept:"application/json",
    Authorization: `Bearer ${validToken} `
  },
});

export const LongStaleTime = 10000000000;
