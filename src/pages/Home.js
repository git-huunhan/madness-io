import { faHome } from "@fortawesome/free-solid-svg-icons";
import TableStudent from "../components/table/TableStudent";

import HeaderCrumb from "../components/breadcrumb/HeaderCrumb";

const Home = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="page-header-title">
          <span>Student Data Table</span>
        </div>

        <HeaderCrumb
          icon={faHome}
          mainTitle="Table"
          secondaryTitle="Student Data Table"
        />
      </div>

      <div className="page-content">
        <TableStudent />
      </div>
    </div>
  );
};

export default Home;
