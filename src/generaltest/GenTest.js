import React, { Component } from "react";
import "./General.css";

import { Link } from "react-router-dom";
export default class GenTest extends Component {
  render() {
    return (
      <div align="center">
        <h3>Career Decision Support General Test</h3>
        <br></br>
        <p className="ques-count">Question 1 out of 10</p>
        <br></br>
        <div className="question">
          <label className="gen-label">
            How interested are you in Computers?
            <span class="checkmark"></span>
          </label>
          <div align="center">
            <input type="radio" className="gen-input" />
            <label className="gen-label">1</label>
            <input type="radio" className="gen-input" />
            <label className="gen-label">2</label>
            <input type="radio" className="gen-input" />
            <label className="gen-label">3</label>
            <input type="radio" className="gen-input" />
            <label className="gen-label">4</label>
            <input type="radio" className="gen-input" />
            <label className="gen-label">5</label>
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
