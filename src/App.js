import { Switch, Route } from "react-router-dom";
import "./styles/App.scss";

import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
