import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import { StylesProvider } from "@material-ui/core/styles";
import './App.css';
import '@n3/react-vision-panel/dist/vision-panel.css';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom";

axios.defaults.baseURL = 'http://sport-school-2.ru/wp-json/wp/v2/';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </Router>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

