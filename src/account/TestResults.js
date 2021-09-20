import React, { Component } from 'react';
import "./Account.css";

import {
    Link
  } from 'react-router-dom'
export default class TestResults extends Component {
    render() {

        return (
            <div align="center">
                <h3>robj2027's Test Results</h3>
                <table className="results"> 
                    <tr>
                        <td className="blue">General Test</td>
                        <td className="orange">Programmer | Director | Austronaut </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td className="blue">Specialized Test</td>
                        <td className="orange">Computer Science | Visual Arts | Austronomy </td>
                    </tr>
                </table>
                <div className="result-btn">
                        <Link to="/mainprofile" className="reg-btn" value="Save">Back</Link>
                        <Link to="/share" className="reg-btn" value="Cancel">Share Results</Link>
                    </div>
                <p className="bottom_p"><b>Make the right decision.</b></p>
            </div>
        )
    }
}
