import React, { Component } from 'react';
import "./Menu.css";

export default class Authors extends Component {
    render() {

        return (
            <div>
            <h1>Meet the Team
            </h1>
            <p>EduGuide is a Career Decision Tool optimized to help you make a decision in finding the right program
            corresponding to your strengths, interest, and skills.</p>
            <div className="devs">
                <img src="./icons/Atcha.png"></img>
                <img src="./icons/Migs.png"></img>
                <img src="./icons/Camille.png"></img>
                <img src="./icons/Rob.png"></img>
            </div>
            <ul className="names-ul">
                <li>ABE, Athena Aliafe </li>
                <li>CARABEO, Paolo Miguel</li>
                <li>MAHILUM, Frances Camille</li>
                <li>TUMULAK, Rob Joshua</li>
            </ul>
            <h6>Web Designers and Developers</h6>
            </div>
        )
    }
}
