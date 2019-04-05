import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home, Album } from "../containers/";

const AppRoutes = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/album" component={Album} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRoutes;
