import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { toast } from "react-toastify";
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/sass/dashboard.scss"
import "./assets/sass/styles.scss"
import "./assets/sass/responsive.scss"

import { Provider } from 'react-redux'
import store from './_redux/Store'

toast.configure();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
