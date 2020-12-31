import React from "react";
import Sidebar from "./components/SideBar/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Boxes from "./pages/Boxes/Boxes";
import Details from "./pages/Details/Details";

import { Provider } from "react-redux";
import configureStore from "./redux/store";
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={Home} />
          <Route path="/home/boxes" component={Boxes} />
          <Route path="/home/details" component={Details} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
