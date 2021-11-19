import React, { Component } from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GET_ALL_USERS } from "../account/Graphql/Queries";
import { useQuery } from "@apollo/client";

function MainProfile() {
  const header = useSelector((state) => state.header);
  const { data } = useQuery(GET_ALL_USERS);
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
            {data &&
              data.getAllUsers.map((user) => {
                <form className="edit-form">
                  <label>
                    <b>Name:</b>
                    <text type="text" className="edit-field" name="name">
                      {user.name}
                    </text>
                  </label>
                  <br></br>
                  <label>
                    <b>Username:</b>
                    <text type="text" className="edit-field" name="uname">
                      {user.username}
                    </text>
                  </label>
                  <br></br>
                  <label>
                    <b>Level/Strand:</b>
                    <text type="text" className="edit-field" name="levelStrand">
                      {user.levelStrand}
                    </text>
                  </label>
                  <br></br>
                  <label>
                    <b>School:</b>
                    <text
                      type="text"
                      className="edit-field"
                      name="school"
                    ></text>
                  </label>
                </form>;
              })}
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
