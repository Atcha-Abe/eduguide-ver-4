import React, { Component } from 'react';
import "./Specialized.css";

import {
    Link
  } from 'react-router-dom'
export default class SpecTest extends Component {
    render() {

        return (
            <div align="center">
                <h3>Computer Science Specialized Test</h3>
                <br></br>

                <p className="test-title">What is the recommended ram capacity to run
                most of the applications?</p>

                <table>
                    <tr align="left">
                        <td>
                            <input type="radio" className="spec-input"/>
                            <label className="spec-label">2GB
                            </label>
                        </td>
                        <td>
                            <input type="radio" className="spec-input"/>
                            <label className="spec-label">4GB
                            </label>
                        </td>
                    </tr>
                    <tr align="left">
                        <td>
                            <input type="radio" className="spec-input"/>
                            <label className="spec-label">3GB
                            </label>
                        </td>
                        <td>
                            <input type="radio" className="spec-input"/>
                            <label className="spec-label">16GB
                            </label>
                        </td>
                    </tr>
                </table>
                
                <div className="result-btn">
                        <Link to="/gencourses" className="reg-btn" value="Back">Back</Link>
                        <Link to="/gencourses" className="reg-btn" value="Reset">Reset</Link>
                        <Link to="/specresults" className="reg-btn" value="Next">Next</Link>
                </div>
                <p className="bottom_p"><b>Make the right decision.</b></p>
            </div>
        )
    }
}
