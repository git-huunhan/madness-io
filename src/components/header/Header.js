import Logo from "../../images/logo.png";
import { Navbar, Nav, Image } from "react-bootstrap";

import {
  faTasks,
  faEnvelope,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import Search from "./Search";
import Notification from "./Notification";
import UserBox from "./UserBox";

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

            <Notification icon={faTasks} badge={0} />
            <Notification icon={faEnvelope} badge={0} />
            <Notification icon={faBell} badge={12} />

            <span className="separator" />

            <UserBox />
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
