import React, { Component } from "react";
import "./General.css";

import { Link } from "react-router-dom";
export default class GenDesc extends Component {
  render() {
    return (
      <div align="center">
        <h1>Career Decision Support General Test</h1>
        <br></br>
        <p class="gen-deschead">
          The Career Decision Support General Test is the first test that will
          guide the student in identifying their strengths and interest in
          relation to the specialization of the 17 programs offered of St. Paul
          University Manila. There are a total of 10 questions provided and each
          question includes a rating scale from 1-5 (5 being the highest) and
          will be considered as an answer resulting to the top 3 recommended
          programs.
          <br></br>
          <br></br>
          This test will take 10 minutes to accomplish.
        </p>
        <div align="center">
          <label className="gen-desc">
            <input type="checkbox" />I acknowledge that I have read and
            understand the abovementioned Support Decision Integrity information
            as it pertains to the test.
          </label>
          <br></br>
          <label className="gen-desc">
            <input type="checkbox" className="gen-input" />I agree to complete
            the test in accordance with the abovementioned Support Decision
            Integrity information.
          </label>
          <br></br>
          <label className="gen-desc">
            <input type="checkbox" className="gen-input" />I accept receiving an
            evaluation form via email to give feedback about the web
            application.
          </label>
        </div>
        <br></br>
        <br></br>
        <Link to="/gentest" className="test-btn" value="submit">
          Take the Test
        </Link>
        <p className="bottom_p">
          <b>Make the right decision.</b>
        </p>
      </div>
    );
  }
}
