import { useEffect, useState, useRef } from "react";
import "./Account.css";
import axios from "axios";

import { Link } from "react-router-dom";
import { CREATE_USER } from "../account/Graphql/Mutation";
import { useMutation } from "@apollo/client";
import GLogin from "./GLogin";

function useKey(key, cb) {
  const callbackRef = useRef(cb);
  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    function handle(event) {
      if (event.keyCode === 13) {
        callbackRef.current(event);
        <Link to="/login"></Link>;
      }
    }
    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key]);
}

function SignUp() {
  function handleEnter() {
    console.log("Enter key is pressed");
    createUser({
      variables: {
        email: email,
        name: name,
        username: username,
        levelStrand: levelStrand,
        school: school,
        password: password,
      },
    });
    axios
      .post("http://localhost:3002/login", createUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useKey("Enter", handleEnter);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [levelStrand, setLevelStrand] = useState("");
  const [school, setSchool] = useState("");
  const [password, setPassword] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    createUser({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div align="center">
      <h1>Create an Account</h1>
      <img src="./icons/Line.png" className="line"></img>
      <form align="left" className="sign-form">
        <label>
          <b>Name:</b>
          <input
            type="name"
            className="field"
            onChange={(event) => {
              setName(event.target.value);
              handleChange(event.target.value);
            }}
          />
          {errors.name && <p className="error">{errors}</p>}
        </label>
        <br></br>
        <label>
          <b>Email:</b>
          <input
            type="email"
            className="field"
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
            onChange={(event) => {
              setUsername(event.target.value);
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
              username: username,
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
