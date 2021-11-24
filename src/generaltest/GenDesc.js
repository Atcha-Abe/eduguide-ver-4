import React, { Component } from "react";
import "./General.css";
import { Link } from "react-router-dom";

import GenTest from "./GenTest";
export default class GenDesc extends Component {
  state = {
    checkbox: "",
    checkboxValid: false,
    errorMsg: {},
    selectedCheckBox: 0,
  };

  validateForm = () => {
    const { checkboxValid } = this.state;
    this.setState({
      formValid: checkboxValid,
    });
  };

  updateCheckbox = ({ name, checked }) => {
    this.setState(
      (prev) => ({
        checkbox: checked,
        selectedCheckBox: checked
          ? prev.selectedCheckBox + 1
          : prev.selectedCheckBox - 1,
      }),
      this.validateCheckbox
    );
  };

  validateCheckbox = () => {
    const { checkbox } = this.state;
    let checkboxValid = true;
    let errorMsg = { ...this.state.errorMsg };
    if (this.state.selectedCheckBox < 3) {
      checkboxValid = false;
      errorMsg.checkbox = "Please select all checkboxes";
    }
    this.setState({ checkboxValid, errorMsg }, this.validateForm);
  };

  routeChange = () => {
    let path = `/gentest`;
    Link.push(path);
  };

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
            {/* <ValidationMessage
          valid={this.state.checkboxValid}
          message={this.state.errorMsg.checkbox}
        /> */}
            <input
              type="checkbox"
              className="test-input"
              onChange={(e) => this.updateCheckbox(e.target)}
            />
            I acknowledge that I have read and understand the abovementioned
            Support Decision Integrity information as it pertains to the test.
          </label>
          <br></br>
          <label className="gen-desc">
            <input
              type="checkbox"
              className="test-input"
              onChange={(e) => this.updateCheckbox(e.target)}
            />
            I agree to complete the test in accordance with the abovementioned
            Support Decision Integrity information.
          </label>
          <br></br>
          <label className="gen-desc">
            <input
              type="checkbox"
              className="test-input"
              onChange={(e) => this.updateCheckbox(e.target)}
            />
            I accept receiving an evaluation form via email to give feedback
            about the web application.
          </label>
        </div>
        <div>
          <button
            className="button"
            type="submit"
            disabled={!this.state.formValid}
            onClick={this.routeChange}
          >
            Take the test
          </button>

          <p className="bottom_p">
            <b>Make the right decision.</b>
          </p>
        </div>
      </div>
    );
  }
}
