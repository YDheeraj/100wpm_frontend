

import React, { useState } from 'react'
import Footer from '../footer/Footer';
import "./Login.css";


const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <>
    <form onSubmit={handleSubmit} className="login-form">
      <label className="login-label">
        Email:
        <input type="email" value={email} onChange={handleEmailChange} className="login-input" />
      </label>
      <br />
      <label className="login-label">
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} className="login-input" />
      </label>
      <br />
      <a href="#sfsd" className="forgot-password-link">Forgot password?</a>
      <br />
      <button type="submit" className="login-button">Login</button>
    </form>
    <Footer></Footer>
    </>
  )
}

export default Login