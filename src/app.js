import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { Store } from "./store";
import AppRoutes from "./routes";

import "./assets/sass/base.scss";

const App = () => <AppRoutes />;

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
