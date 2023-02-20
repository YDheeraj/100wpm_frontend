import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <>
      <div className="container-header">
        <div className="header-inner-constainer">
            <div className="logo">
             <img src={logo} alt="logo"></img> 
            </div>
            <nav >
              <ul>
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
                  <NavLink to="/Registration">SignUp</NavLink>
                  <NavLink to="/Login">LogIn</NavLink>
                </li>
              </ul>
            </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
