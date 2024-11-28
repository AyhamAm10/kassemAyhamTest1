import { Link } from "react-router-dom"
import img from "../../assets/81.png"
import logoutImg from "../../assets/logout.png"
import { mobileLink } from "../../content/mobileNavLink"
import { axiosClaint, endPoints } from "../../api/API__information_conect"
type props = {
  setMenuOpen : React.Dispatch<React.SetStateAction<boolean>>,
  isProfilePage:boolean
}
const MobileList:React.FC<props> = ({setMenuOpen,isProfilePage}) => {

  const handleLogout = ()=>{
    try {
     axiosClaint.post(endPoints.post.loguot , {
      notification_token: localStorage.getItem("YJOZ_token")
    },
    {
      headers:{
        Authorization : `Bearar ${localStorage.getItem("YJOZ_token")}`
      }
    }
  )
  localStorage.removeItem("YJOZ_token")
  setMenuOpen(false)
  } catch (error) {
    console.log(error)
  }
  }
  return (
    <div className="p-5  absolute bg-white rounded-md right-2 top-20 z-30">
        <div className="flex flex-col gap-8 items-start">
            {!isProfilePage && <img src={img} alt="" />}
            <ul className="flex items-start gap-5 flex-col z-50">
                {
                  !isProfilePage?mobileLink(false).map((link:any)=>(
                    <li className="p-2" key={link.id} onClick={()=>setMenuOpen((priv)=>!priv)} >
                        <Link to={link.link} className="flex items-center gap-2">
                            <img src={link.icon} alt="link"  />
                        </Link>
                    </li>
                  )):mobileLink(true).filter((link:any)=>link.isProfileItem).map((link:any)=>(
                    <li className="p-2" key={link.id} onClick={()=>setMenuOpen((priv)=>!priv)} >
                        <Link to={link.link} className="flex items-center gap-5">
                            <img src={link.icon} alt="link" className="bg-gradient-to-r from-red to-yalwe rounded-full p-2 "  />
                            <span>{link.title}</span>
                        </Link>
                    </li>
                  ))
                }
            </ul>
            <button
            onClick={handleLogout}
            className="p-2 flex gap-5 items-center cursor-pointer  ">

            <img src={logoutImg} alt=""  className="bg-red p-2  rounded-full"/>
            {isProfilePage && <span className="text-red">Log out</span>}
            </button>
        </div>
    </div>
  )
}

export default MobileList