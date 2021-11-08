import React, { Component, useState } from "react";
import "./Account.css";
import GLogin from "./GLogin";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logoutUser, setAccountDetails } from "../store/actions/header";
import { button, buttonText, icon } from "./GLogin.css";
import { USER_LOGIN } from "../account/Graphql/Mutation";
import { useMutation } from "@apollo/client";

function LogIn() {
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userLogin, { error }] = useMutation(USER_LOGIN);

  const handleLogin = () => {
    dispatch(setAccountDetails(userDetails));
  };

  const handleChange = (event) => {
    setUserDetails(event.target.value);
  };

  if (error) {
    return <h1> {error} </h1>;
  }

  return (
    <body>
      <div align="center">
        <h1>Log In</h1>
        <img src="./icons/Line.png" className="line"></img>
        <form align="left" className="sign-form">
          <label>
            <b>Username:</b>
            <input
              type="text"
              className="field"
              name="uname"
              onChange={
                ((event) => {
                  setUsername(event.target.value);
                  setUserDetails(event.target.value);
                },
                handleChange)
              }
            />
          </label>
          <br></br>
          <label>
            <b>Password:</b>
            <input
              type="password"
              className="field"
              name="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </label>
        </form>
        <br></br>
        <Link
          to="/welcome"
          className="reg-btn"
          value="Log In"
          onClick={
            (() => {
              userLogin({
                variables: {
                  username: username,
                  password: password,
                },
              });
            },
            handleLogin)
          }
        >
          Log In
        </Link>

        <p>Log In with</p>
        <div align="center">
          <GLogin />
        </div>
        <br></br>

        <p>
          Don't have an account yet? <br></br> <br></br> Sign Up{" "}
          <b>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              here
            </Link>
          </b>
          <br></br>
          <br></br>
          Log in as
          <b>
            <Link to="/adminlogin" style={{ textDecoration: "none" }}>
              Admin
            </Link>
          </b>
        </p>
      </div>
    </body>
  );
}

export default LogIn;
