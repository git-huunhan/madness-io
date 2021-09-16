import Logo from "../../images/logo.png";
import { Navbar, Nav, Image } from "react-bootstrap";

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
  return (
    <Navbar className="navbar" expand="lg">
      <div className="logo-container">
        <Navbar.Brand href="/">
          <Image className="navbar-logo" src={Logo} />
        </Navbar.Brand>
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
              <DropdownNotification icon={faBell} badge={2}>
                <div className="content-popover-header mb-3">
                  <div className="icon-content-popover">
                    <FontAwesomeIcon
                      className="clickable icon"
                      icon={faCheckCircle}
                    />
                  </div>

                  <div>
                    <div className="title-content-popover">Added new student</div>
                    <div className="time-content-popover">Just now</div>
                  </div>
                </div>

                <div className="content-popover-header">
                  <div className="icon-content-popover">
                    <FontAwesomeIcon
                      className="clickable icon"
                      icon={faCheckCircle}
                    />
                  </div>

                  <div>
                    <div className="title-content-popover">Added student</div>
                    <div className="time-content-popover">Just now</div>
                  </div>
                </div>
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
