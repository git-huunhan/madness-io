import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./styles/App.scss";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer } from "react-toastify";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import CreateStudent from "./pages/CreateStudent";
import UpdateStudent from "./pages/UpdateStudent";
import SideBar from "./components/sidebar/Sidebar";

function App() {
  const [menuCollapse, setMenuCollapse] = useState("sidebar");

  const handleMenu = () => {
    menuCollapse === "sidebar"
      ? setMenuCollapse("sidebar-collapse")
      : setMenuCollapse("sidebar");
  };

  return (
    <div className="App">
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <div className="page-content-layout">
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

          <SideBar />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-student" component={CreateStudent} />
            <Route
              exact
              path="/update-student/:slug"
              component={UpdateStudent}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
