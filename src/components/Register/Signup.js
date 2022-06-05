import React, { useState } from 'react';
import './signup.css';

export default function Signup() {
  const [mode, setMode] = useState('');

  return (
    <div className={`signupPage ${mode}`}>
      <button onClick={() => setMode('darkMode')}>DarkMode</button>
      <h1 className="topHead">The DevSolver are you,</h1>
      <h1 className="nextHead">We’re just a medium</h1>

      <p className="signPara">Sign Up Now to join the family of Devs!</p>
      <form action="" id="signupForm">
        <input
          placeholder="Full Name"
          type="text"
          className="form-control formInput"
        />
        <input
          placeholder="Phone or E-mail"
          type="text"
          className="form-control formInput"
        />
        <input
          placeholder="Password"
          type="text"
          className="form-control formInput"
        />
        <input
          placeholder="Profession"
          type="text"
          className="form-control formInput"
        />

        <button className="btn btn-dark rounded">Continue</button>
      </form>
    </div>
  );
}
