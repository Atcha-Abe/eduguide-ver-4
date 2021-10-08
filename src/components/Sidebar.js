import React from "react";
import "./Sidebar.css";
import {useSelector} from "react-redux"; 
import {ImCross} from "react-icons/im";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../store/actions/sidebar";

import {
    Link
  } from 'react-router-dom'


function Sidebar() {
    const dispatch = useDispatch();
    const sidebar = useSelector((state) => state.sidebar);
    //from index reducer
    const handleClick = () => {
        dispatch(hideSidebar());
    }
    return (
        <div className="sidebar" id={sidebar ? "show-sidebar": "hide-sidebar"}>
            <ul className="sidebar__links">
                <li className="sidebar__link">
                    <Link to="/home"  className="sidebar__link">Home</Link>
                    </li>
                    <li className="sidebar__link">
                    <Link to="/about"  className="sidebar__link" >About</Link>
                    </li>
                <li className="sidebar__link">
                    Blogs
                </li>
                <li className="sidebar__link">
                    FAQs
                </li>
                <li className="sidebar__link">
                    Community
                </li>
                <li className="sidebar__link">
                    Contact
                </li>
            </ul>
            <div className="sidebar__cancel"> 
                <ImCross onClick= { () => handleClick() }/>
            </div>
        </div>
    )
}

export default Sidebar;