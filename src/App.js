import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { HOME, DASHBOARD, LOGIN, SIGN_UP } from "./constants/routes";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import "./sass/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={SIGN_UP}>
          <SignUp />
        </Route>
        <Route path={LOGIN}>
          <Login />
        </Route>
        <Route path={DASHBOARD}>
          <Dashboard />
        </Route>
        <Route path={HOME}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
