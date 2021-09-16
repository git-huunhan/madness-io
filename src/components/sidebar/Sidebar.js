import { Navigation } from "react-minimal-side-navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="content-sidebar">
      {console.log(location.pathname)}
      <Navigation
        activeItemId={location.pathname}
        onSelect={({ itemId }) => {
          history.push(itemId);
        }}
        items={[
          {
            title: (
              <div className="d-flex align-items-center">
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
  );
};

export default Sidebar;
