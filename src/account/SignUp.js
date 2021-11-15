import React, { useState } from "react";
import "./Account.css";

import { Link } from "react-router-dom";
import { CREATE_USER } from "../account/Graphql/Mutation";
import { useMutation } from "@apollo/client";
import GLogin from "./GLogin";
import { useForm } from "react-hook-form";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [levelStrand, setLevelStrand] = useState("");
  const [school, setSchool] = useState("");
  const [password, setPassword] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  return (
    <div align="center">
      <h1>Create an Account</h1>
      <img src="./icons/Line.png" className="line"></img>
      <form align="left" className="sign-form">
        <label>
          <b>Name:</b>
          <input type="name" className="field" />
        </label>
        <br></br>
        <label>
          <b>Email:</b>
          <input type="email" className="field" />
        </label>
        <br></br>
        <label>
          <b>Username:</b>
          <input type="text" className="field" name="uname" />
        </label>
        <br></br>
        <label>
          <b>Level/Strand:</b>
          <input type="text" className="field" name="levelstrand" />
        </label>
        <br></br>
        <label>
          <b>School: </b>
          <input type="text" className="field" name="school" />
        </label>
        <br></br>
        <label>
          <b> Password: </b>
          <input type="password" className="field" name="password" />
        </label>
      </form>
      <p>Sign Up with</p>
      <div align="center">
        <GLogin />
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
              name: name,
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
