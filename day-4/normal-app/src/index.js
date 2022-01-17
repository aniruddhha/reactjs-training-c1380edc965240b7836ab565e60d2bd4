import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

class CustomTag extends React.Component {
  render() {
    const mobiles = ['abc', 'pqr', 'lmn', 'xyz', 'hij']

    const mobLi = mobiles.map(mb => <li> {mb} </li>)
    const mobUl = (
      <ul>{mobLi}</ul>
    )
    return mobUl
  }
}

function MyTag() {

  const isShow = true
  const mobiles = ['abc', 'pqr', 'lmn', 'xyz', 'hij']

  const mobLi = mobiles.map(mb => <li> {mb} </li>)
  const mobUl = (
    isShow && <ul>{mobLi}</ul>
  )
  return mobUl
}

function AnotherComponent() {
  return (
    <></> // react fragment
  )
}

const obj = {
  border: '1px solid red', // css properties
  width: '100px',
  height: '100px'
}

ReactDOM.render(
  <div style={{
    border: '1px solid red', // css properties
    width: '100px',
    height: '100px'
  }} >
    <input type="button" value="okay" />
  </div>,
  document.getElementById('root')
);

