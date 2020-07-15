import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import {} from "react-redux";
import { carReducer } from "./components/reducers";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
