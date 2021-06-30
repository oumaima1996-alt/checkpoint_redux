import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store.js'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


