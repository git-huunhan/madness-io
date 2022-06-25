import { Navbar, Nav, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import moment from "moment";

import {
  faTasks,
  faEnvelope,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "./Search";
import UserBox from "./UserBox";
import DropdownNotification from "../dropdown/DropdownNotification";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let { student } = useSelector((state) => ({ ...state }));

  return (
    <Navbar className="navbar" expand="lg">
      <div className="logo-container">
        <Navbar.Brand href="/">hihi</Navbar.Brand>
      </div>

      <div className="header-right">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Search icon={faSearch} />

            <span className="separator" />

            <div className="notification">
              <DropdownNotification icon={faTasks} badge={0} />
              <DropdownNotification icon={faEnvelope} badge={0} />
              <DropdownNotification icon={faBell} badge={student.length}>
                {student.reverse().map((item) => (
                  <div className="content-popover-header mb-3">
                    <div className="icon-content-popover">
                      <FontAwesomeIcon
                        className="clickable icon"
                        icon={faCheckCircle}
                      />
                    </div>

                    <div>
                      <div className="title-content-popover">
                        Added new student
                        <br />
                        {item.studentCode} - {item.firstName} {item.lastName}
                      </div>
                      <div className="time-content-popover">
                        {moment(item.createdAt).format("lll")}
                      </div>
                    </div>
                  </div>
                ))}
              </DropdownNotification>
            </div>

            <span className="separator" />

            <UserBox />
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
