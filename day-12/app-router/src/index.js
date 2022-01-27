import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Login } from './login/login'
import { Home } from './home/home'
import { About } from './about/about'
import { NotFoundComponent } from './not-found/not-found'

const router = (

  <BrowserRouter>
    <Routes>
      <Route path='/' element ={ <App/> }/>
      <Route path='/login' element ={ <Login/> }/>
      <Route path='/home/:userId' element ={ <Home/> }/>
      <Route path='/about' element ={ <About/> }>
        <Route path='service' element={ <h3> We provide these Services </h3> }/>
        <Route path='product' element={ <h3> We have these Products </h3> }/>
      </Route>
      <Route path='*' element={<NotFoundComponent/>}/>
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(
    router,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
