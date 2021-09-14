import React, { Component } from 'react';
import MainProfile from './MainProfile'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom' 
export default class Welcome extends Component {
    render() {

        return (
            <div align="center">
                <div align="left">
                    <Link to="/mainprofile" className="menu-ul2" style={{ textDecoration: 'none' }}>Hi robjt27!</Link>
                </div>
            <h1>
                Welcome
                robjt2027
            </h1>
            <br></br>
            <br></br>
            <button type="submit"> Take the Test </button>
            <Router>
                    <Route path="/mainprofile" component={MainProfile} />
             </Router>
            </div>
        )
    }
}
