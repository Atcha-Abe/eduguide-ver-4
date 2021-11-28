import React, { useState } from "react";
import "./Account.css";
import { UPDATE_PASSWORD } from "../account/Graphql/Mutation";
import { useMutation } from "@apollo/client";

import { Link } from "react-router-dom";
function ChangePass() {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  if (error) {
    return <h1> {error} </h1>;
  }
  return (
    <div align="center">
      <h3>Change Password</h3>
      <form className="pass-form">
        <label>
          <b>Username:</b>
          <input
            type="username"
            className="pass-field"
            name="username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <br></br>
        <label>
          <b>Password:</b>
          <input
            type="password"
            className="pass-field"
            name="password"
            onChange={(event) => {
              setCurrentPassword(event.target.value);
            }}
          />
        </label>
        <br></br>
        <label>
          <b>New Password:</b>
          <input
            type="password"
            className="pass-field"
            name="npassword"
            onChange={(event) => {
              setNewPassword(event.target.value);
            }}
          />
        </label>
      </form>
      <div className="pass-btns">
        <Link
          to="/save"
          className="reg-btn"
          value="Save"
          onClick={() => {
            updatePassword({
              variables: {
                username: username,
                oldPassword: currentPassword,
                newPassword: newPassword,
              },
            });
          }}
        >
          Save
        </Link>
        <Link to="/mainprofile" className="reg-btn" value="Cancel">
          Cancel
        </Link>
      </div>
      <p className="bottom_p">
        <b>Make the right decision.</b>
      </p>
    </div>
  );
}

export default ChangePass;
