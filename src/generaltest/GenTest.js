import React, { Component } from "react";
import "./General.css";

import { Link } from "react-router-dom";
export default class GenTest extends Component {
  render() {
    return (
      <div align="center">
        <h3>Career Decision Support General Test</h3>
        <br></br>
        <div className="question">
          <input type="checkbox" className="gen-input" />
          <label className="gen-label">
            Do you like Computers?
            <span class="checkmark"></span>
          </label>
          <div className="options" align="left">
            <input type="radio" className="gen-input" />
            <label className="gen-label">Programming</label>
            <br></br>
            <input type="radio" className="gen-input" />
            <label className="gen-label">Video Editing</label>
            <br></br>
            <input type="radio" className="gen-input" />
            <label className="gen-label">Gaming</label>
            <br></br>
            <input type="radio" className="gen-input" />
            <label className="gen-label">Building</label>
          </div>
        </div>
        <div className="result-btn">
          <Link to="/gendesc" className="reg-btn" value="Back">
            Back
          </Link>
          <Link to="/genresults" className="reg-btn" value="Next">
            Next
          </Link>
        </div>
        <p className="bottom_p">
          <b>Make the right decision.</b>
        </p>
      </div>
    );
  }
}
