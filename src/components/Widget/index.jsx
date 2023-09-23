import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

const Widget = ({ type }) => {
  let data;
  const amount = 2000;
  const persentage = 50;

  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{ color: "#fff", backgroundColor: "rgba(212, 46, 46, 0.6)" }}
          />
        )
      };
      break;
    case "order":
      data = {
        title: "Order",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{ color: "#fff", backgroundColor: "rgba(0, 237, 255, 0.5)" }}
          />
        )
      };
      break;

    case "earning":
      data = {
        title: "Earning",
        isMoney: true,
        link: "View net earning",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              color: "#fff",
              backgroundColor: "rgba(84, 223, 181, 0.5)"
            }}
          />
        )
      };
      break;

    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceOutlinedIcon
            className="icon"
            style={{ color: "#fff", backgroundColor: "#20c997" }}
          />
        )
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney && "£"} {amount}
        </div>
        <div className="link">{data.link}</div>
      </div>

      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {persentage} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;