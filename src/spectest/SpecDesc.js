import React, { Component } from "react";
import "./Specialized.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
export default class SpecDesc extends Component {
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
    if (this.state.selectedCheckBox < 2) {
      checkboxValid = false;
      errorMsg.checkbox = "Please select all checkboxes";
    }
    this.setState({ checkboxValid, errorMsg }, this.validateForm);
  };

  

  routeChange = (Link) => {
    let path = `/bscompsci`;
    Link = path;
  };

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
            <input
              type="checkbox"
              className="test-input"
              onChange={(e) => this.updateCheckbox(e.target)}
            />
            I acknowledge that I have read and understand the abovementioned
            Support Decision Integrity information as it pertains to the test.
          </label>
          <br></br>
          <label className="spec-desc">
            <input
              type="checkbox"
              className="test-input"
              onChange={(e) => this.updateCheckbox(e.target)}
            />
            I agree to complete the test in accordance with the abovementioned
            Support Decision Integrity information.
          </label>
        </div>
        <br></br>
        <br></br>
        <Link to="/bscompsci">
          <button
            className="button"
            type="submit"
            disabled={!this.state.formValid}
            onClick={this.routeChange}
          >
            Take the test
          </button>
        </Link>
        <p className="bottom_p">
          <b>Make the right decision.</b>
        </p>
      </div>
    );
  }
}
