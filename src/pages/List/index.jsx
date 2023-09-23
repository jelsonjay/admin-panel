import "./list.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DataTable from "../../components/DataTable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list__container">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;