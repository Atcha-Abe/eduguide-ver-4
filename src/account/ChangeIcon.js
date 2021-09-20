import React, { Component } from 'react';
import "./Account.css";
import {
    Link
  } from 'react-router-dom'
export default class ChangeIcon extends Component {
    render() {

        return (
            <div align="center">
                <h3>Change Icon</h3>
                        <div className="bg-icon">
                          <img src="./icons/bg icon.png"></img>
                          <div className="change-icon">
                          <img src="./icons/icon 1.png"></img>
                        </div>
                        </div>
                        <div className="option-icon"> 
                            <table className="icons">
                                <tr>
                                    <td ><img src="./icons/icon 2.png"></img></td>
                                    <td ><img src="./icons/icon 3.png"></img></td>
                                    <td><img src="./icons/icon 4.png"></img></td>
                                </tr>
                                <tr>
                                    <td><img src="./icons/icon 5.png"></img></td>
                                    <td ><img src="./icons/icon 6.png"></img></td>
                                    <td ><img src="./icons/icon 7.png"></img></td>
                                </tr>
                            </table>
                        </div>
                    <div className="change-btn">
                        <Link to="/save" className="reg-btn" value="Save">Save Changes</Link>
                        <Link to="/EditProfile" className="reg-btn" value="Cancel">Cancel</Link>
                    </div>
                <p className="bottom_p"><b>Make the right decision.</b></p>
            </div>
        )
    }
}
