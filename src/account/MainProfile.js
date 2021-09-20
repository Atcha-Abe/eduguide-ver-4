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
                <table className="profile-table">
                    <tr>
                        <td>
                        <div className="edit-iconbg">
                          <img src="./icons/bg icon.png"></img>
                          <div className="edit-icon">
                            <img src="./icons/icon 1.png"></img>
                          </div>
                        </div>
                        </td>
                        <td>
                        <form className="edit-form">
                    <label> 
                    <b>Username:</b>
                        <input type="text" className="edit-field" name="uname" />
                    </label>
                    <br></br>
                    <label>
                    <b>Level/Strand:</b>
                    <input type="text" className="edit-field" name="lvlstrand" />
                    </label>
                    <br></br>
                    <label>
                    <b>School:</b>
                    <input type="text" className="edit-field" name="school" />
                    </label>
                </form>
                        </td>
                    </tr>
                </table>
                    <div className="profile-btn">
                        <Link to="/editprofile" className="reg-btn" value="Edit">Edit</Link>
                        <Link to="/changepass" className="reg-btn" value="Change Password">Change Password</Link>
                        <Link to="/testresults" className="reg-btn" value="Show Test Results">Show Test Results</Link>
                    </div>
                <p className="bottom_p"><b>Make the right decision.</b></p>
            </div>
        )
    }
}
