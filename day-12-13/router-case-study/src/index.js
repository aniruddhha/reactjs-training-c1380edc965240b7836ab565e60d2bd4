import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { LeftMenu } from './left-menu/left-menu';
import { Overview } from './left-menu/overview';
import { Dashboard } from './left-menu/dashboard';

const dt = { sts : 'success'  } // fetch call result

const router = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LeftMenu/>}>
        <Route path='home' element={<Overview/>} />
        <Route path='dashboard' element={ dt.sts === 'success' ?  <Dashboard/> : <> <h1> UnAuthorized </h1> </>} />
      </Route>
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(
  dt.sts === 'success' ? router : <><h1> UnAuthorized </h1></> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
