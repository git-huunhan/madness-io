import { Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import CreateStudent from "./pages/CreateStudent";
import UpdateStudent from "./pages/UpdateStudent";
import SideBar from "./components/sidebar/Sidebar";

function App() {
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
        <SideBar />

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
