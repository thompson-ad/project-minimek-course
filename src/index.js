import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.css";

import configureStore from "./store/configureStore";
const store = configureStore();

// save a reference to the root element for reuse
const rootEl = document.getElementById("root");

// create a reusable render method that we will call more than once
// once on startup and then again when editing during development
let render = () => {
  // Dynamically import our main App component, and render it
  const App = require("./App").default;

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  );
};

// Webpack's module.hot API should only be available in development
if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    // Support hot reloading of components.
    // Whenever the App component file or one of its dependencies
    // is changed, re-import the updated component and re-render it
    // File change events “bubble up” if they’re not handled, so listening for changes to App.js should catch edits from any file imported by our component tree.
    module.hot.accept("./App", () => {
      // re-run the render function
      setTimeout(render);
    });
  }
}

render();
