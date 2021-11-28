import React, { useState } from "react";
import "./Account.css";
import { UPDATE_PASSWORD } from "../account/Graphql/Mutation";
import { useMutation } from "@apollo/client";
import axios from "axios";

import { Link } from "react-router-dom";

function ChangePass() {
  const [values, setValues] = useState(
    {
      userName: '',
      currentPassword: '',
      newPassword: '',
    }
  );
  const [errors, setErrors] = useState({});

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  const handleInputChange = e => {
    const { id, value } = e.target
    setValues({ ...values, [id]: value })
  }

  const changePassword = () => {    
    let errors = {};
    if (values.userName.trim() === '') {
      errors.userName = 'Enter user name.';
    }

    if (values.currentPassword === '') {
      errors.currentPassword = 'Enter Current Password.';
    } 
    
    if (values.newPassword === '') {
      errors.newPassword = 'Enter New Password.';
    } 

    if (errors.userName ||
      errors.currentPassword ||
      errors.newPassword
    ) {
      setErrors(errors);
      return;
    }

    updatePassword({
      variables: {
        username: values.userName,
        oldPassword: values.currentPassword,
        newPassword: values.newPassword,  
      },
    });

    axios.post(baseUrl + 'api/changePassword', {
      username: values.userName,
      oldPassword: values.currentPassword,
      newPassword: values.newPassword,      
    }) 
    .then((response) => {
      alert(response.data.result);      
    })
    .catch((error) => {
      alert(error);
    });
  };

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
            type="userName"
            className="pass-field"
            name="userName"
            onChange={handleInputChange}
          />
          {errors.userName && <p className="form-error">{errors.userName}</p>}
        </label>
        <br></br>
        <label>
          <b>Password:</b>
          <input
            type="currentPassword"
            className="pass-field"
            name="currentPassword"
            onChange={handleInputChange}
          />
          {errors.currentPassword && <p className="form-error">{errors.currentPassword}</p>}
        </label>
        <br></br>
        <label>
          <b>New Password:</b>
          <input
            type="newPassword"
            className="pass-field"
            name="newPassword"
            onChange={handleInputChange}
          />
          {errors.newPassword && <p className="form-error">{errors.newPassword}</p>}
        </label>
      </form>
      <div className="pass-btns">
        <Link
          to="/save"
          className="reg-btn"
          value="Save"
          onClick={changePassword}
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
