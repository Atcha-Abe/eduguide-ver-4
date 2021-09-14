import React, { Component } from 'react';
import "./Account.css";

import {
    Link
  } from 'react-router-dom'
export default class Contact extends Component {
    render() {

        return (
            <div align="center">
                <h1>
                    Log In
                </h1>
                <img src="./icons/Line.png" className="line"></img>
                <form align="left" className="sign-form">
                    <label> 
                    <b>Username:</b>
                        <input type="text" className="field" name="uname" />
                    </label>
                    <br></br>
                    <label>
                    <b>Password:</b>
                        <input type="password" className="field" name="password" />
                    </label>
                </form>
                <p>Log In with</p>
                <div align="center">
                    <img src="./icons/Google.png" className="social-icons"></img>
                    <img src="./icons/Facebook.png" className="social-icons"></img>
                </div>
                <br></br>
                <Link to="/welcome" className="reg-btn" value="Log In">Log In</Link>
                <p>Don't have an account yet? <br></br> <br></br> Sign Up <b><Link to="/signup" style={{ textDecoration: 'none' }}>here</Link></b></p>
            </div>
        )
    }
}
