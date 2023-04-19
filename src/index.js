import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import Store from "./Redux/Store";
import FatherPosts from './components/FatherPosts';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <FatherPosts />
  </Provider>
);
reportWebVitals();
