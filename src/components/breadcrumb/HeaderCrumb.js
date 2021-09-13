import { Breadcrumb } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HeaderCrumb = ({icon, title}) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item active>
        <Link to="/">
          <FontAwesomeIcon
            className="mr-2 clickable breadcrumd-btn-home"
            icon={icon}
          />
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{title}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default HeaderCrumb;
