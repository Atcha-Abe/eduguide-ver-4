import React, { Component } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from './menu/Home'
import About from './menu/About'
import Blogs from './menu/Blogs'
import FAQs from './menu/FAQs'
import Community from './menu/Community'
import Contact from './menu/Contact'
import Login from './account/Login'
import Signup from './account/SignUp'
import Welcome from './account/Welcome'
import MainProfile from './account/MainProfile'
import EditProfile from './account/EditProfile'
import ChangeIcon from './account/ChangeIcon'
import ChangePass from './account/ChangePass'
import TestResults from './account/TestResults'
import GenTest from './generaltest/GenTest'
import GenResults from './generaltest/GenResults'
import GenCourses from './generaltest/GenCourses'
import SpecTest from './spectest/SpecTest'
import SpecResults from './spectest/SpecResults'
import Footer from  './components/Footer'

import { BrowserRouter as Router, Route } from 'react-router-dom';

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
                <Route exact path="/mainprofile" component={MainProfile} />
                <Route exact path="/editprofile" component={EditProfile} />
                <Route exact path="/changeicon" component={ChangeIcon} />
                <Route exact path="/changepass" component={ChangePass} />
                <Route exact path="/testresults" component={TestResults} />
                <Route exact path="/gentest" component={GenTest} />
                <Route exact path="/genresults" component={GenResults} />
                <Route exact path="/gencourses" component={GenCourses} />
                <Route exact path="/spectest" component={SpecTest} />
                <Route exact path="/specresults" component={SpecResults} />
                <Route exact path="/welcome" component={Welcome} />
                <div className="push"></div> 
                <Footer />
            </div>
            </Router>
        )
    }
}

export default App;
