import React from "react";
import "./Navbar.css";
import {GiHamburgerMenu} from "react-icons/gi";
import { useDispatch } from "react-redux";
import { showSidebar } from "../store/actions/sidebar";

import {
    Link
  } from 'react-router-dom'

function NavBar() {
    //update event state
    const dispatch = useDispatch();
    
    //eventhandler
    const handleClick = () => {
        dispatch(showSidebar());
    }

        return(
            <div className="navbar">
                <div className="navbar__wrapper">
                    <div className="navbar__logo">
                    <Link to="/home"><img src="./images/Logo192.png" alt="eduguide logo" />
                    </Link>
                    </div>
                    <ul className="navbar__links">
                        <li className="navbar__link">
                        <Link to="/home"  className="navbar__link" >Home</Link>
                        </li>
                        <li className="navbar__link">
                        <Link to="/about"  className="navbar__link" >About</Link>
                        </li>
                        <li className="navbar__link">
                        <Link to="/blogs"  className="navbar__link" >Blogs</Link>
                        </li>
                        <li className="navbar__link">
                        <Link to="/faqs"  className="navbar__link" >FAQs</Link>
                        </li>
                        <li className="navbar__link">
                        <Link to="/community"  className="navbar__link" >Community</Link>
                        </li>
                        <li className="navbar__link">
                        <Link to="/contact"  className="navbar__link" >Contact</Link>
                        </li>
                        <div className="login-item">
                            <li><Link to="/login" className="login-item">Log In</Link></li> 
                            <li><Link to="/signup" className="login-item">Sign Up</Link></li>   
                        </div>
                    </ul>
                    <GiHamburgerMenu onClick={ () => handleClick() } className="navbar__burger" />
                </div>
            </div>
        )
}

export default NavBar;