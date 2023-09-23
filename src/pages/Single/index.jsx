import "./single.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Chart from "../../components/Chart";
import List from "../../components/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="btnEdit">Edit</div>
            <h1 className="title">User Details</h1>
            <div className="item">
              <img className="itemImg" src="../images/user.jpg" alt="avatar" />
              <div className="details">
                <h1 className="itemTitle">Mary Bath</h1>

                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">example.com</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+ 44 2589 36 999</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">478 Street London 7854</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">UK</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Month)" />
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;