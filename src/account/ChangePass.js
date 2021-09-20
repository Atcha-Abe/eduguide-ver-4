import React, { Component } from 'react';
import "./Account.css";

import {
    Link
  } from 'react-router-dom'
export default class ChangePass extends Component {
    render() {

        return (
            <div align="center">
                <h3>Change Password</h3>
                <form className="pass-form">
                    <label> 
                    <b>New Password:</b>
                        <input type="password" className="pass-field" name="password" />
                    </label>
                    <br></br>
                    <label>
                    <b>Confirm Password:</b>
                        <input type="password" className="pass-field" name="cpassword" />
                    </label>
                </form>
                <div className="pass-btns">
                        <Link to="/save" className="reg-btn" value="Save">Save</Link>
                        <Link to="/mainprofile" className="reg-btn" value="Cancel">Cancel</Link>
                    </div>
                <p className="bottom_p"><b>Make the right decision.</b></p>
            </div>
        )
    }
}
