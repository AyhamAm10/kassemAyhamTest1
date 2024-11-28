import { headerType } from "../type/headerType";
import imgComp1 from "../assets/home/Component 27.png"
import imgComp2 from "../assets/home/Component 28.png"
import imgComp3 from "../assets/home/Component 29.png"
import list1 from "../assets/profilePage/list/list1.svg"
import list1active from "../assets/profilePage/list/list1active.svg"
import list2 from "../assets/profilePage/list/list2.svg"
import list2Active from "../assets/profilePage/list/list2Active.svg"
import list3 from "../assets/profilePage/list/list3.svg"
import list3Active from "../assets/profilePage/list/list3Active.svg"
import list4active from "../assets/profilePage/list/list4Active.svg"
import list4 from "../assets/profilePage/list/list4.svg"
import list5active from "../assets/profilePage/list/list5active.svg"
import list5 from "../assets/profilePage/list/list5.svg"
// import list6active from "../assets/profilePage/list/list6active.svg"
// import list6 from "../assets/profilePage/list/list6.svg"

export const headerList:headerType[] = [
    {
        id : 1 ,
        title : "Home",
        _id: "",
        active: false
    },
    {
        id : 2 ,
        title : "About",
        _id: "/about_us",
        active: false
    },
    {
        id : 3 ,
        title : "search",
        _id: "/search",
        active: false
    },
    {
        id : 4 ,
        title : "Our App",
        _id: "/our_app",
        active: false
    },
    {
        id : 5 ,
        title : "Contact Us",
        _id: "/contactUs",
        active: false
    }
]

export const profilePageList = [
    {
        id:1 ,
        link:"profile",
        icon: list1,
        activeIcon: list1active,
        active: false
    },
    {
        id:2 ,
        link:"my_items",
        icon: list2,
        activeIcon: list2Active,
        active: false
    },
    {
        id:3 ,
        link:"favorites",
        icon: list3,
        activeIcon: list3Active,
        active: false
    },
    {
        id:4 ,
        link:"addresses",
        icon: list4,
        activeIcon: list4active,
        active: false
    },
    {
        id:5 ,
        link:"chat",
        icon: list5,
        activeIcon: list5active,
        active: false
    },
    // {
    //     id:1 ,
    //     link:"programe",
    //     icon: list6,
    //     activeIcon: list6active,
    //     active: false
    // },
    
]

export const blogsList = [
    {
        title : "Lorem ipsum dolor sit amet consectetur. Urna ac sed ullamcorper donec mi in.",
        desc : "Lorem ipsum dolor sit amet consectetur. Libero est quis pulvinar justo. Orci et sem.",
        img:imgComp1
    },
    {
        title : "Lorem ipsum dolor sit amet consectetur. Urna ac sed ullamcorper donec mi in.",
        desc : "Lorem ipsum dolor sit amet consectetur. Libero est quis pulvinar justo. Orci et sem.",
        img:imgComp2
    },
    {
        title : "Lorem ipsum dolor sit amet consectetur. Urna ac sed ullamcorper donec mi in.",
        desc : "Lorem ipsum dolor sit amet consectetur. Libero est quis pulvinar justo. Orci et sem.",
        img:imgComp3
    }
]

export const initialcategorySelectValue = "Motors"