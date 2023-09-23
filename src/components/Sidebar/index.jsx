import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import BarChartIcon from "@mui/icons-material/BarChart";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AddCardIcon from "@mui/icons-material/AddCard";
import BadgeIcon from "@mui/icons-material/Badge";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PsychologyIcon from "@mui/icons-material/Psychology";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext"

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      {/* <!---TOP----> */}
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">JJ Admin</span>
        </Link>
      </div>
      <hr />
      {/* <!---CENTER----> */}
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashbord</span>
          </li>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <AddBusinessIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <p className="title">List</p>
          <li>
            <SettingsSuggestIcon className="icon" />
            <span>System</span>
          </li>
          <li>
            <LocalHospitalIcon className="icon" />
            <span>Health</span>
          </li>

          <p className="title">Services</p>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">Useful Links</p>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <RestaurantIcon className="icon" />
            <span>Restaurant</span>
          </li>

          <li>
            <AddCardIcon className="icon" />
            <span>Order</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <p className="title">User</p>
          <li>
            <BadgeIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
          <li>
            <BarChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
        </ul>
      </div>

      {/* <!---BOTTOM----> */}
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
