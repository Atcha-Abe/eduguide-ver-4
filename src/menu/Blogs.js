import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'
export default class Blogs extends Component {
    render() {

        return (
            <div align="center">
            <h1>
                Tell us your career decision journeys/advice!
            </h1>
            <input type="text" className="blog-field" name="name"/>
            <br></br>
            <br></br>
                <input className="sub-btn" type="submit" value="Submit" />
            </div>

        )
    }
}