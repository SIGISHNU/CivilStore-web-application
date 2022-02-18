import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/Redux/Store';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

