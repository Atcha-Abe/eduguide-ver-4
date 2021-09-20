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
                <table className="edit-table">
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
                        <Link to="/changeicon" className="reg-btn" value="Edit">Change Icon</Link>
                        <Link to="/save" className="reg-btn" value="Change Password">Save Changes</Link>
                        <Link to="/mainprofile" className="reg-btn" value="Cancel">Cancel</Link>
                    </div>
                <p className="bottom_p"><b>Make the right decision.</b></p>
            </div>
        )
    }
}
