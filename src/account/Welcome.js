import React, { Component } from "react";
import MainProfile from "./MainProfile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Welcome() {
  const header = useSelector((state) => state.header);

  return (
    <div align="center">
      <h1>Welcome {header}</h1>
      <br></br>
      <br></br>
      <Link to="/gentest" className="test-btn" value="submit">
        Take the Test
      </Link>
      <Router>
        <Route path="/mainprofile" component={MainProfile} />
      </Router>
    </div>
  );
}
export default Welcome;
