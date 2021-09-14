import React, { Component } from 'react';
import "./Account.css";
import {
    Link
  } from 'react-router-dom'
export default class EditProfile extends Component {
    render() {

        return (
            <div>
                <h3>Edit Profile</h3>
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
                        <Link to="/changeicon" className="reg-btn" value="Edit">Change Icon</Link>
                        <Link to="/welcome" className="reg-btn" value="Change Password">Save Changes</Link>
                        <Link to="/mainprofile" className="reg-btn" value="Show Test Results">Cancel</Link>
                    </div>
                </form>
                <p className="bottom_p"><b>Make the right decision.</b></p>
            </div>
        )
    }
}
