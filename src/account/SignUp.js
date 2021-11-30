import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Account.css";
import axios from "axios";

import { Link } from "react-router-dom";
import { CREATE_USER } from "../account/Graphql/Mutation";
import { useMutation } from "@apollo/client";
import GLogin from "./GLogin";
import Form from "./Form";
import useForm from "./useForm";
import validate from "./validateInfo";

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

function SignUp(props) {
  async function handlePost() {
    if ((username, password)) {
      try {
        const data= await createUser({
          variables: {
            email: values.email,
            name: values.name,
            username: values.username,
            levelStrand: values.levelStrand,
            school: values.school,
            password: values.password,
          },
        });
        if(data){
          history.push('/login')
        }
      } catch (error) {
        console.log(error)
      }
      
    }
  }
  function handleEnter() {
    console.log("Enter key is pressed");
    createUser({
      variables: {
        email: values.email,
          name: values.name,
          username: values.username,
          levelStrand: values.levelStrand,
          school: values.school,
          password: values.password,
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
  const { handleSignup, values, handleSubmit, errors } = useForm(validate);
  const [createUser,{data,loading,error}] = useMutation(CREATE_USER);
  const history = useHistory()

  return (
    <div align="center">
      <h1>Create an Account</h1>
      <img src="./icons/Line.png" className="line"></img>
      <div align="left">
        <form className="sign-form" onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                className="field"
                value={values.name}
                onChange={handleSignup}
                onClick={(event) => {
                  setName(event.target.value);
                }}
              />{" "}
              {errors.name && <p className="form-error">{errors.name}</p>}
            </label>
            <br></br>
            <label>
              Email:
              <input
                type="email"
                name="email"
                className="field"
                onChange={handleSignup}
                onClick={(event) => {
                  setEmail(event.target.value);
                }}
              />{" "}
              {errors.email && <p className="form-error">{errors.email}</p>}
            </label>
            <br></br>
            <label>
              Username:
              <input
                type="text"
                name="username"
                className="field"
                value={values.username}
                onChange={handleSignup}
                onClick={(event) => {
                  setUsername(event.target.value);
                }}
              />{" "}
              {errors.username && (
                <p className="form-error">{errors.username}</p>
              )}
            </label>
            <br></br>
            <label>
              Level/Strand:
              <input
                type="text"
                name="levelStrand"
                className="field"
                value={values.levelStrand}
                onChange={handleSignup}
                onClick={(event) => {
                  setLevelStrand(event.target.value);
                }}
              />{" "}
              {errors.levelStrand && (
                <p className="form-error">{errors.levelStrand}</p>
              )}
            </label>
            <br></br>
            <label>
              School:
              <input
                type="text"
                name="school"
                className="field"
                value={values.school}
                onChange={handleSignup}
                onClick={(event) => {
                  setSchool(event.target.value);
                }}
              />{" "}
            </label>
            <br></br>
            <label>
              Password:
              <input
                type="password"
                name="password"
                className="field"
                value={values.password}
                onChange={handleSignup}
                onClick={(event) => {
                  setPassword(event.target.value);
                }}
              />{" "}
              {errors.password && (
                <p className="form-error">{errors.password}</p>
              )}
            </label>
            <br></br>
            <label>
              Confirm Password:
              <input
                type="password"
                name="password2"
                className="field"
                value={values.password2}
                onChange={handleSignup}
              />{" "}
              {errors.password2 && (
                <p className="form-error"> {errors.password2}</p>
              )}
            </label>
          </div>
          <br></br>

          <button className="reg-btn" type="submit" onClick={handlePost}>
            Sign up
          </button>
        </form>
        <br></br>
        <br></br>
        <p>Sign Up with</p>
        <div align="center">
          <GLogin />
        </div>
      </div>

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