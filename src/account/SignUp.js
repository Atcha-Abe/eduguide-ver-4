import React, { useState } from "react";
import "./Account.css";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccountDetails } from "../store/actions/header";
import { CREATE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function SignUp() {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [levelStrand, setLevelStrand] = useState("");
  const [school, setSchool] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setUserDetails(event.target.value);
  };

  return (
    <div align="center">
      <h1>Create an Account</h1>
      <img src="./icons/Line.png" className="line"></img>
      <form align="left" className="sign-form">
        <label>
          <b>Email:</b>
          <input
            type="email"
            className="field"
            name="name"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <br></br>
        <label>
          <b>Username:</b>
          <input
            type="text"
            className="field"
            name="uname"
            value={userDetails}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </label>
        <br></br>
        <label>
          <b>Level/Strand:</b>
          <input
            type="text"
            className="field"
            name="levelstrand"
            onChange={(event) => {
              setLevelStrand(event.target.value);
            }}
          />
        </label>
        <br></br>
        <label>
          <b>School: </b>
          <input
            type="text"
            className="field"
            name="school"
            onChange={(event) => {
              setSchool(event.target.value);
            }}
          />
        </label>
        <br></br>
        <label>
          <b> Password: </b>
          <input type="password" className="field" name="password" />
        </label>
      </form>
      <p>Sign Up with</p>
      <div align="center">
        <img src="./icons/Google.png" className="social-icons"></img>
      </div>
      <br></br>
      <Link
        to="/login"
        className="reg-btn"
        value="Sign Up"
        onClick={() => {
          createUser({
            variables: {
              email: email,
              username: userName,
              levelStrand: levelStrand,
              school: school,
              password: password,
            },
          });
        }}
      >
        Sign Up
      </Link>
      <p>
        Already have an account? <br></br> Log In{" "}
        <b>
          <Link to="/login" style={{ textDecoration: "none" }}>
            here
          </Link>
        </b>
      </p>
    </div>
  );
}

export default SignUp;
