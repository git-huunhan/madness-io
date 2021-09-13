import { NavDropdown, Dropdown } from "react-bootstrap";

import {
  faAngleDown,
  faAngleUp,
  faUser,
  faLock,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

import UserInfoHeader from "../user/UserInfoHeader";
import DropdownHeader from "../dropdown/DropdownHeader";

const UserBox = () => {
  return (
    <div className="header-user">
      <NavDropdown
        title={<UserInfoHeader icon={faAngleDown} />}
        menuAlign={{ lg: "left" }}
        id="dropdown-menu-align-responsive-2"
      >
        <Dropdown.Item eventKey="1">
          <UserInfoHeader icon={faAngleUp} />
        </Dropdown.Item>

        <div className="dropdown-menu-container">
          <div className="divider"></div>
          <DropdownHeader eventKey={2} icon={faUser} title={"My Profile"} />
          <DropdownHeader eventKey={3} icon={faLock} title={"Lock Screen"} />
          <DropdownHeader eventKey={4} icon={faPowerOff} title={"Logout"} />
        </div>
      </NavDropdown>
    </div>
  );
};

export default UserBox;
