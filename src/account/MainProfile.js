import React, { Component } from 'react';
import "./Account.css";
import {
    Link
  } from 'react-router-dom'
export default class MainProfile extends Component {
    render() {

        return (
            <div>
                <h3>My Profile</h3>
                <form className="sign-form">
                    <label> 
                    <b>Username:</b>
                        <input type="text" className="field" name="uname" />
                    </label>
                    <br></br>
                    <label>
                    <b>Level/Strand:</b>
                    <input type="text" className="field" name="lvlstrand" />
                    </label>
                    <br></br>
                    <label>
                    <b>School:</b>
                    <input type="text" className="field" name="school" />
                    </label>
                    <div className="profile-btn">
                        <Link to="/editprofile" className="reg-btn" value="Edit">Edit</Link>
                        <Link to="/welcome" className="reg-btn" value="Change Password">Change Password</Link>
                        <Link to="/mainprofile" className="reg-btn" value="Show Test Results">Show Test Results</Link>
                    </div>
                </form>
                <p className="bottom_p"><b>Make the right decision.</b></p>
            </div>
        )
    }
}
