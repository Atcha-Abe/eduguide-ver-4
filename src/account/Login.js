import { useEffect, useState, useRef } from "react";
import "./Account.css";
import GLogin from "./GLogin";
import { Link,useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logoutUser, setAccountDetails } from "../store/actions/header";
import { button, buttonText, icon } from "./GLogin.css";
import { USER_LOGIN } from "../account/Graphql/Mutation";
import { useMutation } from "@apollo/client";
import axios from "axios";
import { message } from "antd";

function useKey(key, cb) {
  const callbackRef = useRef(cb);
  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    function handle(event) {
      if (event.keyCode === 13) {
        callbackRef.current(event);
      }
    }
    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key]);
}

function LogIn() {
  function handleEnter() {
    console.log("Enter key is pressed");
    userLogin({
      variables: {
        username: username,
        password: password,
      },
    });
    axios
      .post("login", userLogin)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useKey("Enter", handleEnter);

  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  const [userLogin, { error }] = useMutation(USER_LOGIN);

  const handleLogin = async() => {
    //dispatch(setAccountDetails(userDetails));
    console.log(username,password)
    if(username && password){
      try {
        const data=await userLogin({
          variables: {
            username: username,
            password: password,
          },
        });
        if(data?.data?.userLogin?.successful){
          localStorage.setItem('user',JSON.stringify(data?.data?.userLogin?.user))
          dispatch(setAccountDetails(data?.data?.userLogin?.user?.username));
          history.push('/welcome')
        }
      } catch (error) {
        console.log(error)
        message.error('Something went wrong...please try again')
      }
      
    }else{
      message.error('Please enter valid details')
    }
    
  };

  const handleChange = (event) => {
    setUserDetails(event.target.value);
  };

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
              onChange={(event) => {
                  setUsername(event.target.value);
                  setUserDetails(event.target.value);
                }
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
        <button className="reg-btn" type="submit" onClick={handleLogin}>
            Log in
          </button>

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
