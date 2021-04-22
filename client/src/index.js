// React
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// Redux
import store from "./redux/store";
import { Provider } from "react-redux";
// React app components 
import App from "./react";
// Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
// App render
ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>, document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
