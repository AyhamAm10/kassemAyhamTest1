import home from "../assets/profilePage/list/home2.svg"
import home2 from "../assets/profilePage/list/home3.svg"
import about from "../assets/profilePage/list/persone.svg"
import about2 from "../assets/profilePage/list/persone copy.svg"
import search from "../assets/profilePage/list/category copy.svg"
import search2 from "../assets/profilePage/list/category.svg"
import contact from "../assets/profilePage/list/contactUs.svg"
import contact2 from "../assets/profilePage/list/contactUs copy.svg"
import main from "../assets/profilePage/list/mainProfile.svg"
import main2 from "../assets/profilePage/list/mainProfile2.svg"
import list2 from "../assets/profilePage/list/item.svg"
import list22 from "../assets/profilePage/list/item copy.svg"
import list3 from "../assets/profilePage/list/fevorite.svg"
import list33 from "../assets/profilePage/list/fevorite copy.svg"
import list4 from "../assets/profilePage/list/icon.svg"
import list44 from "../assets/profilePage/list/icon copy.svg"
import list5 from "../assets/profilePage/list/chat.svg"
import list55 from "../assets/profilePage/list/chat copy.svg"
// import list6 from "../assets/profilePage/list/list6.svg"



export const mobileLink =(isProfilePage:boolean)=> [
    {
        id:7 ,
        link:"/",
        icon: !isProfilePage?home:home2,
        active: false,
        isProfileItem:false,
        title:"Home"
    },
    {
        id:8 ,
        link:"/about_us",
        icon: !isProfilePage?about:about2,
        active: false,
        isProfileItem:false,
        title:"About Us"
    },
    {
        id:9 ,
        link:"/search",
        icon: !isProfilePage?search:search2,
        active: false,
        isProfileItem:false,
        title:"Search"
    },
    {
        id:10 ,
        link:"/contactUs",
        icon: !isProfilePage?contact:contact2,
        active: false,
        isProfileItem:false,
        title:"Contact Us"
    },
    {
        id:1 ,
        link:"/account/profile",
        icon:!isProfilePage?main:main2 ,
        active: false,
        isProfileItem:true,
        title:"My Profile"
    },
    {
        id:2 ,
        link:"/account/my_items",
        icon: !isProfilePage?list2:list22,
        active: false,
        isProfileItem:true,
        title:"My Items"
    },
    {
        id:3 ,
        link:"/account/favorites",
        icon: !isProfilePage?list3:list33,
        active: false,
        isProfileItem:true,
        title:"My Favorites"
    },
    {
        id:4 ,
        link:"/account/addresses",
        icon: !isProfilePage?list4:list44,
        active: false,
        isProfileItem:true,
        title:"My Addresses"
    },
    {
        id:5 ,
        link:"/account/chat",
        icon: !isProfilePage?list5:list55,
        active: false,
        isProfileItem:true,
        title:"Chat"
    },
    // {
    //     id:6 ,
    //     link:"/profile/programe",
    //     icon: list6,
    //     active: false
    // },
    
]