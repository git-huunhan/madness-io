import {
  faPen,
  faTrash,
  faSyncAlt,
  faPlus,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import TableStudent from "../components/table/TableStudent";

import HeaderCrumb from "../components/breadcrumb/HeaderCrumb";

const Home = () => {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-title">
          <span>Home</span>
        </div>

        <HeaderCrumb icon={faHome} title={"Home"} />
      </div>

      <div className="page-content">
        <TableStudent />
      </div>
    </div>
  );
};

export default Home;
