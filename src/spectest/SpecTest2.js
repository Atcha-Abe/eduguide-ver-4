import React, { Component } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default class SpecTest2 extends Component {
  render() {
    return (
      <div align="center">
        <h3>Information Technology Specialized Test</h3>
        <br></br>
        <p className="ques-count">Question 1 out of 10</p>
        <br></br>

        <p className="test-title">Select the secure url.</p>

        <table className="spec-options">
          <tr align="left">
            <td>
              <label className="spec-label">
                <input type="radio" className="spec-input" />
                www.facebook1.com
              </label>
            </td>
            <td>
              <label className="spec-label">
                <input type="radio" className="spec-input" />
                www.eduguide.com
              </label>
            </td>
          </tr>
          <tr align="left">
            <td>
              <label className="spec-label">
                <input type="radio" className="spec-input" />
                www.y0utube.com
              </label>
            </td>
            <td>
              <label className="spec-label">
                <input type="radio" className="spec-input" />
                www.instagram.xyz
              </label>
            </td>
          </tr>
        </table>

        <div className="result-btn">
          <Link to="/gencourses" className="reg-btn" value="Back">
            Back
          </Link>
          <Link to="/gencourses" className="reg-btn" value="Reset">
            Reset
          </Link>
          <Link to="/specresults2" className="reg-btn" value="Next">
            Next
          </Link>
        </div>
        <div>
          <br></br>
          <Link to="/specdesc" className="reg-btn">
            Reset
          </Link>
          <Link to="/spectest" className="reg-btn">
            Back
          </Link>
          <Link to="/spectest" className="reg-btn">
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
