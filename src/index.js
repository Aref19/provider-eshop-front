import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContext } from './context/LoginContext';
import { createBrowserRouter, Route, BrowserRouter } from "react-router-dom";
import Item from './component/Item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <router>
    <React.StrictMode>
      <BrowserRouter>
        <AuthContext >
          <App />
        </AuthContext>
      </BrowserRouter>


    </React.StrictMode>
  </router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
