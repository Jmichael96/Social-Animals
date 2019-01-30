import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Nav from "./components/Nav/index";
import Login from "./pages/Login";
import Signup from "./components/Signup/index";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/user" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
