import React, { Component } from "react";
import Authors from "./Authors";
import System from "./System";
import "./Menu.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class About extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="about__link">
            <table className="about__table">
              <tr>
                <td className="about__box">
                  <Link to="/authors" className="about__link">
                    Authors
                  </Link>
                </td>
                <vr /> <vr /> <vr />
                <td className="about__box">
                  <Link to="/system" className="about__link">
                    System
                  </Link>
                </td>
              </tr>
            </table>
          </div>
          <Route path="/authors" component={Authors} />
          <Route path="/system" component={System} />
        </Router>
      </div>
    );
  }
}
