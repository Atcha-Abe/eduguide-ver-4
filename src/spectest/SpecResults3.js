import React, { Component } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default class SpecResults3 extends Component {
  render() {
    return (
      <div align="center">
        <h3>Hotel and Restaurant Management Specialized Test</h3>
        <br></br>
        <table className="spec-row">
          <tr>
            <td>
              <h3>Your Score is:</h3>
            </td>
            <td>
              <p className="spec-title">9/10</p>
            </td>
          </tr>
        </table>
        <div className="result-btn">
          <Link to="/share" className="reg-btn" value="Next">
            Share Results
          </Link>
          <br></br>
          <br></br>
          <Link to="/spectest1" className="reg-btn" value="Next">
            Take the next test
          </Link>
        </div>
        <p className="bottom_p">
          <b>Make the right decision.</b>
        </p>
      </div>
    );
  }
}
