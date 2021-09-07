import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { HOME, DASHBOARD } from "./constants/routes";
import Home from "./pages/Home";

import "./sass/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={DASHBOARD}> Dashboard </Route>
        <Route path={HOME}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
