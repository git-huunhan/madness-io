import { useState } from "react";
import { Navigation } from "react-minimal-side-navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router-dom";

import { Button } from "react-bootstrap";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [menuCollapse, setMenuCollapse] = useState("sidebar");

  const handleMenu = () => {
    menuCollapse === "sidebar"
      ? setMenuCollapse("sidebar-collapse")
      : setMenuCollapse("sidebar");
  };

  return (
    <div className={`${menuCollapse}`}>
      <div className="sidebar-header">
        <div className="sidebar-title ml-3">Navigation</div>

        <Button className="sidebar-btn-menu" onClick={handleMenu}>
          <FontAwesomeIcon
            className="clickable icon sidebar-option-icon"
            icon={faBars}
          />
        </Button>
      </div>

      <div className="content-sidebar">
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: (
                <div className="d-flex align-items-center" onClick={handleMenu}>
                  <FontAwesomeIcon
                    className="mr-2 clickable sidebar-option-icon"
                    icon={faTable}
                  />
                  <span className="sidebar-option-title">Table</span>
                </div>
              ),
              itemId: `${location.pathname}`,

              subNav: [
                {
                  title: "Student Data Table",
                  itemId: "/",
                },
                {
                  title: "Create Student",
                  itemId: "/create-student",
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Sidebar;
