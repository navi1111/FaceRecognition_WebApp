import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/MainStyle.css';
import LogInHeader from './Pages/LogIn/Header/Header';
import LogInMain from './Pages/LogIn/Main/Main';
import RegisterHeader from './Pages/Register/Header/Header';
import RegisterMain from './Pages/Register/Main/Main';
import './Style/Fonts/Fonts.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegisterHeader/>
    <RegisterMain/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
