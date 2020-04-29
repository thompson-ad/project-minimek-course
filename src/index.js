import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import configureStore from "./store/configureStore";
const store = configureStore();

// The redux store is now accessible to any Redux-connected react component in the tree
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
