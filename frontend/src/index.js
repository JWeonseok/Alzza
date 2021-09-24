import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import reducer from './lib/store/store'
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware  from "redux-promise";
import reduxThunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  reduxThunk
)(createStore)

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleware(reducer)}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
