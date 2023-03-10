import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from '../../images/logo.png';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../actions";


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.setUser);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);


  const Rendermenu =()=>{
  

    if(user){
      return <ul>
           <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/Typingtest">Typing Test</NavLink>
                </li>
                <li>
                  <NavLink to="/typingTutor">Typing Tutor </NavLink>
                </li>
                <li>
                  <NavLink to="/Learn">Instructon</NavLink>
                </li>
                <li>
                  <NavLink to="/Logout">Logout</NavLink>
                </li>
      </ul>
    }
    return <ul>
        <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/Typingtest">Typing Test</NavLink>
                </li>
                <li>
                  <NavLink to="/typingTutor">Typing Tutor </NavLink>
                </li>
                <li>
                  <NavLink to="/Learn">Instructon</NavLink>
                </li>
                <li>
                  <NavLink to="/registration">SignUp</NavLink>
                </li>
                <li className="login">
                <NavLink to="/Login">LogIn</NavLink>
                </li>
    </ul>
  }




  return (
    <>
    <div className="navbar">
    <img src={logo} alt="logo"  className="logo"></img>  
              <Rendermenu></Rendermenu>
    </div>
    </>
  );
};

export default Header;
