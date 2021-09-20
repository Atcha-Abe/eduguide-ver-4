import React, { Component } from 'react';
import "./General.css";

import {
    Link
  } from 'react-router-dom'
export default class GenResults extends Component {
    render() {

        return (
            <div align="center">
                <h3>Career Decision Support General Test</h3>
                <br></br>

                <p className="test-title">The best program for you to take:</p>

                <h2>Computer Science</h2>
                <h2>Information Security</h2>
                <h2>Hotel and Restaurant Management</h2>
                
                <div className="result-btn">
                        <Link to="/gencourses" className="reg-btn" value="Learn More">Learn More</Link>
                </div>
                <p className="bottom_p"><b>Make the right decision.</b></p>
            </div>
        )
    }
}
