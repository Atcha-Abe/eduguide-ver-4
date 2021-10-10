import React, { Component } from "react";
export default class Community extends Component {
  render() {
    return (
      <div align="center">
        <h1>Community</h1>
        <img src="./icons/Line.png" className="line"></img>

        <div className="commdiv">
          <div className="commicon">
            <img src="./icons/icon 7.png"></img>
          </div>
          <textarea className="commfield" name="post" />{" "}
        </div>
      </div>
    );
  }
}
