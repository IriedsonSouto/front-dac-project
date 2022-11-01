import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Medicine from './screens/medicine/MedicinePag';
import Goat from './screens/goat/GoatPag';
import Aplication from './screens/aplication/AplicationPag'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Aplication/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
