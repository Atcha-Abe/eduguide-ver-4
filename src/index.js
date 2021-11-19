import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import App from "./App";
import axios from "axios";

axios.defaults.baseUrl = "http://localhost:3002/";

const destination = document.querySelector(".root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  destination
);
