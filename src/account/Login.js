import React, { Component, useState } from "react";
import "./Account.css";
import GLogin from './GLogin';
import GLogout from './GLogout';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logoutUser, setAccountDetails } from "../store/actions/header";
import GoogleLogin from "react-google-login";
import {
  button,
  buttonText,
  icon
} from './GLogin.css'



function LogIn() {
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState("");

  const handleLogin = () => {
    dispatch(setAccountDetails(userDetails));
  };

  const handleChange = (event) => {
    setUserDetails(event.target.value);
  };

    
    
  
  return (
    <body>
      <div align="center">
        <h1>Log In</h1>
        <img src="./icons/Line.png" className="line"></img>
        <form align="left" className="sign-form">
          <label>
            <b>Username:</b>
            <input
              type="text"
              className="field"
              name="uname"
              value={userDetails}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            <b>Password:</b>
            <input type="password" className="field" name="password" />
          </label>
        </form>
<<<<<<< HEAD
        <p>Log In with</p>
        <div align="center">
          <img src="./icons/Google.png" className="social-icons"></img>
        </div>
        <br></br>
=======
>>>>>>> a7da9e0b7f5fc8c3e3c1ed898b7203a8ae30fbd0
        <Link
          to="/welcome"
          className="reg-btn"
          value="Log In"
          onClick={handleLogin}
        >
          Log In
        </Link>

        <p>Log In with</p>
        <div align="center">
        <GLogin />
        <GLogout />
      

          
          
        </div>
        <br></br>
        
        <p>
          Don't have an account yet? <br></br> <br></br> Sign Up{" "}
          <b>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              here
            </Link>
          </b>
          <br></br>
          <br></br>
          Log in as
          <b>
            <Link to="/adminlogin" style={{ textDecoration: "none" }}>
              Admin
            </Link>
          </b>
        </p>
      </div>
    </body>
  );
}

export default LogIn;
