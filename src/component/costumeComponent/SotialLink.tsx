import facebook from "../../assets/profilePage/program/logos_facebook.png"
import inst from "../../assets/profilePage/program/skill-icons_instagram.png"
import x from "../../assets/profilePage/program/line-md_twitter-x.png"
import linkedIn from "../../assets/profilePage/program/skill-icons_linkedin.png"
import youtube from "../../assets/profilePage/program/logos_youtube-icon.png"

const SotialLink = () => {

    const links = [
        {
            icon : facebook,
        },
        {
            icon : inst,
        },
        {
            icon : linkedIn,
        },
        {
            icon : x,
        },
        {
            icon : youtube,
        },
    ]
  return (
    <ul className="flex w-full items-center justify-between">
        {
            links.map((link:any , index:number)=> <li key={index}> <img src={link.icon } alt="sotial media link" /></li>)
        }
    </ul>
  )
}

export default SotialLink