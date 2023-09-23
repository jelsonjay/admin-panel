import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import DvrIcon from "@mui/icons-material/Dvr";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="searchBar">
          <input type="text" placeholder="Search..." name="searcr" />
          <SearchOutlinedIcon className="search-icon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>
            {darkMode ? (<BedtimeIcon className="icon"/>
            ) : (
            <WbSunnyIcon className="icon"/>
            )}
            
          </div>
          <div className="item">
            <ChatBubbleIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <DvrIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img className="avatar" src="./images/user.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;