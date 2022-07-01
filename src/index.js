import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss"
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducers from "./Store/reducers/rootReducers";

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);
