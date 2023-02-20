import React, { useState } from 'react'
import Footer from '../footer/Footer';
import "./registration.css";

const  Registration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsChecked, setTermsChecked] = useState(false);
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const handleTermsCheckedChange = (event) => {
      setTermsChecked(event.target.checked);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
    };


  return (
    <>
    <div className='grad-dark'>
    <form className='form-registration' onSubmit={handleSubmit}>
      <label className="input-label">
        <span>Username:</span>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label className="input-label">
        <span>Email:</span>
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label className="input-label">
        <span>Password:</span>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <label className="input-label">
        <span>Confirm Password:</span>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </label>
      <label className="checkbox-label">
        <input type="checkbox" checked={termsChecked} onChange={handleTermsCheckedChange} />
        <span>I agree to the terms and services</span>
      </label>
      <button type="submit">Register</button>
    </form>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Registration;
