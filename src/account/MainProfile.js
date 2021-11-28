import React, { Component } from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Avatar } from "antd";
import { assertNamedType } from "graphql";

function MainProfile() {
  const header = useSelector((state) => state.header);

  return (
    <div>
      <h3>My Profile</h3>
      <table className="profile-table">
        <tr>
          <td>
            <Avatar size={64} icon="user" />
          </td>
          <td>
            <form className="edit-form">
              <label>
                <b>Name:</b>
                <text type="text" className="edit-field" name="aname"></text>
              </label>
              <br></br>
              <label>
                <b>Username:</b>
                <text type="text" className="edit-field" name="uname">
                  {header}
                </text>
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
        <Link to="/editprofile" className="reg-btn" value="Edit">
          Edit
        </Link>
        <Link to="/changepass" className="reg-btn" value="Change Password">
          Change Password
        </Link>
        <Link to="/testresults" className="reg-btn" value="Show Test Results">
          Show Test Results
        </Link>
      </div>
      <p className="bottom_p">
        <b>Make the right decision.</b>
      </p>
    </div>
  );
}

export default MainProfile;
