import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import ChildProp, { Abc } from './child-prop/child-prop'
import { Typ } from './typ/typ';
import { DataTable } from './data-table/data-table';

const child = (
  <ChildProp>
    <h1> Hello </h1>
    <Abc name='pqr' />
  </ChildProp >
)

const typ = (
  <>
    <Typ nm='abc' num={10} isDt={false} />
  </>
)

const dataTable = (
  <DataTable />
)


ReactDOM.render(
  dataTable,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
