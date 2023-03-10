

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import "./Login.css";
import {setUser,setEmail} from '../../actions/index';
import { useDispatch } from 'react-redux';



const Login = () => {
   
  const sendUserstatus = useDispatch();
  const sendEmail=useDispatch();

    const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setemail(event.target.value);
  }

 

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
 const navigate=useNavigate();
  const handleSubmit =async (event) => {
    event.preventDefault();
    const res= await fetch("/signin",{
      method:"POST",
      headers:{
           "content-Type":"application/json"
      },
      body:JSON.stringify({
         email,
         password
      })
    })
    const data=res.json();
    if(res.status===400||!data){
      window.alert("invalid Credentials");
    }else{
      console.log("user");
      sendUserstatus(setUser(true));
      sendEmail(setEmail(email));
      console.log(email);
      window.alert("Login Successful");
      navigate("/")
    }
  }

  return (
    <>
    <form method='POST' onSubmit={handleSubmit} className="login-form">
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