import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // استيراد framer-motion
import logo from "../../assets/yjoz-logo 1.png";
import { headerList } from "../../content";
import { headerType } from "../../type/headerType";
import search from "../../assets/Search.svg";
import login from "../../assets/Log in.svg";
import Language from "../../assets/Language.svg";
import emirates from "../../assets/emirates.png";
import menu from "../../assets/f7_menu.svg";
import MobileList from "../homePage/MobileList";
import { useTranslation } from "react-i18next";
import avatar from "../../assets/avatar.png"
const Header = () => {
  let location = useLocation();
  const [ListItem, setListItem] = useState<headerType[]>(headerList);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuProfileOpen, setMenuProfileOpen] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const newList = ListItem.map((item) =>
      location.pathname === item._id
        ? { ...item, active: true }
        : { ...item, active: false }
    );
    setListItem(newList);
  }, [location]);

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
  };

  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage)
      .then(() => {
        localStorage.setItem("YJOZ_lang" , newLanguage)
      })
      .catch((error) => {
        console.error("Error changing language:", error);
      });
  };
  
  return (
    <header className="flex justify-center  py-5 sm:py-7 2xl:py-[69px] bg-white relative [padding-inline:min(3vw,60px)] max-w-[2044px] mx-auto">
      <div className=" flex justify-between items-center w-full ">
        <Link className="mr-20 md:mr-32 lg:mr-36" to="/">
          <img src={logo} alt="yjoz logo" className="h-5 lg:h-8 2xl:h-14 " />
        </Link>

        <ul className="hidden lg:flex gap-4 sm:gap-6 lg:gap-8 ">
          
          {ListItem.map((item: headerType) => (
            <Link key={item.id} to={item._id}>
              <li
                className={` md:text-xs lg:text-sm xl:text-lg 2xl:text-2xl font-semibold xl:font-bold cursor-pointer ${
                  item.active ? "text-yalwe" : "text-ofblack"
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2 2xl:gap-3">
          <Link to={"/search"}>
            <img
              src={search}
              className="rounded-full w-[36px] h-[36px] 2xl:w-[56px] 2xl:h-[56px]"
              alt="search icon "
            />
          </Link>
          {!localStorage.getItem("YJOZ_token") && (
            <button>
              <Link to={"/login"}>
                <img
                  src={login}
                  className="rounded-full w-[36px] h-[36px] 2xl:w-[56px] 2xl:h-[56px]"
                  alt="login icon"
                />
              </Link>
            </button>
          )}

          <button className="rounded-full border border-[#E0E0E0] px-3 py-3 flex items-center justify-center gap-2 ">
            <img src={emirates} width={20} alt="language" />
            <h3 className="text-ofblack font-semibold text-sm">UAE</h3>
          </button>

          <button
            onClick={() => changeLanguage()}
            className="rounded-full border border-[#E0E0E0] min-w-[80px] px-2 py-2 flex items-center justify-center gap-2 "
          >
            <img src={Language} width={25} alt="language" />
            <h3 className="text-ofblack font-semibold text-sm">EN</h3>
          </button>

          {
            localStorage.getItem("YJOZ_token") &&
            <span onClick={()=>setMenuProfileOpen((priv)=>!priv)} >
              <img
                src={avatar}
                className="rounded-full w-[36px] h-[36px] 2xl:w-[56px] 2xl:h-[56px]"
                alt="search icon "
              />
            </span>
          }
        </div>

        <div className="lg:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
          <img src={menu} alt="menu" className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile List with Animation */}
      <motion.div
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        variants={menuVariants}
        className="overflow-hidden"
      >
        <MobileList setMenuOpen={setMenuOpen} isProfilePage={false} />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isMenuProfileOpen ? "visible" : "hidden"}
        variants={menuVariants}
        className="overflow-hidden"
      >
        <MobileList setMenuOpen={setMenuProfileOpen} isProfilePage={true} />
      </motion.div>
    </header>
  );
};

export default Header;
