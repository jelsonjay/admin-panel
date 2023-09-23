import "./home.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Widget from "../../components/Widget";
import Chart from "../../components/Chart";
import Banner from "../../components/Banner";
import Table from "../../components/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Banner />
          <Chart title="Last 6 Months (Reveniue)" aspect={2 / 1} />
        </div>
        <div className="list">
          <div className="list__title">Latest Transictions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;