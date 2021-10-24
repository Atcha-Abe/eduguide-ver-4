import React, { Component } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default class SpecDesc extends Component {
  render() {
    return (
      <div align="center">
        <h1>Career Decision Support Specialized Test</h1>
        <br></br>
        <p class="spec-deschead">
          The Career Decision Support Specialized test is the second test based
          on the General Test results. Each specialization test is optimized
          with more specific questions related to the program. There are a total
          of 10 questions provided and the highest score among the three
          specialization test is the most recommended program.
          <br></br>
          <br></br>
          This test will take 10 minutes to accomplish.
        </p>
        <div align="center">
          <label className="spec-desc">
            <input type="checkbox" />I acknowledge that I have read and
            understand the abovementioned Support Decision Integrity information
            as it pertains to the test.
          </label>
          <br></br>
          <label className="spec-desc">
            <input type="checkbox" />I agree to complete the test in accordance
            with the abovementioned Support Decision Integrity information.
          </label>
        </div>
        <br></br>
        <br></br>
        <Link to="/spectest1" className="test-btn" value="submit">
          Take the Test
        </Link>
        <p className="bottom_p">
          <b>Make the right decision.</b>
        </p>
      </div>
    );
  }
}
