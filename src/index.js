import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Login from './Login' ;
import App from './App' ;

ReactDOM.render(
  <React.StrictMode>
    <div className='g-signin'>
      <App/>
      <Login />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);