import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import colorReducer from "./reducer/ColorReducer";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = createStore(colorReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
