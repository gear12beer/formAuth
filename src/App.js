import React from 'react';
import './App.css';

function App() {
  return (
    <form className='forms'>
      <div className='container'>
        <h1 className='heading'>Register</h1>
        
        <div className='required'>
          <label>First Name</label>
          <br></br>
          <input type='text' className='inputs' placeholder='First Name'></input>
        </div>

        <div className='required'>
          <label>Last Name</label>
          <br></br>
          <input type='text' className='inputs' placeholder='Last Name'></input>
        </div>

        <div className='required'>
          <label>Email Address</label>
          <br></br>
          <input type='email' className='inputs' placeholder='Email Address'></input>
        </div>

        <div className='required'>
          <label>Date Of Birth</label>
          <br></br>
          <input type='date' className='inputs' ></input>
        </div>

        <div className='required'>
          <label>Password</label>
          <br></br>
          <input type='password' className='inputs' placeholder='Password'></input>
        </div>
      </div>
    </form>
  );
}

export default App;
