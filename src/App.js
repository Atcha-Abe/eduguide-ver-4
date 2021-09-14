import React, { Component } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from './menu/Home'
import About from './menu/About'
import Blogs from './menu/Blogs'
import FAQs from './menu/FAQs'
import Welcome from './menu/Welcome'
import Community from './menu/Community'
import Contact from './menu/Contact'
import Login from './account/Login'
import Signup from './account/SignUp'
import Footer from "./components/Footer"

import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'

class App extends Component{
    render() {
        return(
            <Router>
            <div className="app">
                <Navbar />
                <Sidebar />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blogs" component={Blogs} />
                <Route exact path="/faqs" component={FAQs} />
                <Route exact path="/community" component={Community} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Footer />
            </div>
            </Router>
        )
    }
}

export default App;