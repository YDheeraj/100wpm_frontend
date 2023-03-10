import React, { useState } from 'react'
import Footer from '../footer/Footer';
import "./registration.css";
import regImg from '../../images/regiImg.jpg';
import {useNavigate} from "react-router-dom";
import { setUser } from '../../actions';
import { useDispatch } from 'react-redux';

const  Registration = () => {
  const history = useNavigate();
   const [user,setUser]=useState([{
        name:"",email:"",password:"",cpassword:"",check:""
   }])

   let name,value;
   const handleInputs=(e)=>{
        console.log(e);
        name= e.target.name;
        value = e.target.value
        setUser({...user,[name]:value});
   }

   const sendUserstatus = useDispatch();


   const handlesubmit= async (e)=>{

     e.preventDefault();
     const {name,email,password,cpassword}=user;
     const res=  await  fetch("/register",{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify({
         name,email,password,cpassword
      })
     });
     const data = await res.json();
     if(data.status===422 || !data){
      window.alert("Invalid Registration");
      console.log("invalid Registration");
     }
     else{
      window.alert("Registration Successful");
       console.log("successful Registration");
         sendUserstatus(setUser(false));
       history("/");
     }
   }


  return (
    <>
    <div className='registration-main'>
      <div className='registration'>
        <div className='registration-image'>
          <img src={regImg} alt="registrationImg"></img>
        </div>
    <form className='form-registration' onSubmit={handlesubmit}>
      <label className="input-label">
        <span>Name:</span>
        <input type="text" name='name'id='name' value={user.name} onChange={handleInputs} />
      </label>
      <label className="input-label">
        <span>Email:</span>
        <input type="email" name='email' id='email' value={user.email} onChange={handleInputs} />
      </label>
      <label className="input-label">
        <span>Password:</span>
        <input type="password" name='password' id='password' value={user.password} onChange={handleInputs} />
      </label>
      <label className="input-label">
        <span>Confirm Password:</span>
        <input type="password" name='cpassword' id='cpassword' value={user.cpassword} onChange={handleInputs} />
      </label>
      <label className="checkbox-label">
        <input type="checkbox" name='check' id='check' checked={user.check}  onChange={handleInputs} />
        <span>I agree to the terms and services</span>
      </label>
      <button type="submit">Register</button>
    </form>
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Registration;
