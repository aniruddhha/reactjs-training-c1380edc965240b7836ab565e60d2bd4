import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Car } from './car/car'
import { Mobile } from './mobile/mobile'
import { BikeIndex } from './bike/bike'

ReactDOM.render(
  <React.StrictMode>
    <BikeIndex/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
