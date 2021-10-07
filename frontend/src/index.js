import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
// import reducer from './lib/store/store'
import persistedReducer from './lib/store/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { applyMiddleware, createStore, compose } from 'redux';
import promiseMiddleware  from "redux-promise";
import reduxThunk from "redux-thunk";

// const createStoreWithMiddleware = applyMiddleware(
//   promiseMiddleware,
//   reduxThunk
// )(createStore)

const store = createStore(persistedReducer, compose(
  applyMiddleware(promiseMiddleware, reduxThunk))
)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider
      store={createStoreWithMiddleware(reducer)}
    > */}
    <Provider
      store={store}
    >
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
