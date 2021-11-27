import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Blogs() {
  const header = useSelector((state) => state.header);
  return (
    <div align="center">
      <h1>Tell us your career decision journeys/advice!</h1>
      <input type="text" className="blog-field" name="name" />
      <br></br>
      <br></br>

      {header ? (
        <input className="sub-btn" type="submit" value="Submit" />
      ) : (
        <Link to="/login"></Link>
      )}
    </div>
  );
}

export default Blogs;
