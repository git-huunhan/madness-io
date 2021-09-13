import { Dropdown } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownHeader = ({ eventKey, icon, title }) => {
  return (
    <div>
      <Dropdown.Item eventKey={eventKey} className="dropdown-options">
        <FontAwesomeIcon
          className="clickable dropdown-options-icon mr-2"
          icon={icon}
        />
        {title}
      </Dropdown.Item>
    </div>
  );
};

export default DropdownHeader;
