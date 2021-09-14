import React, { Component } from 'react';
export default class Contact extends Component {
    render() {

        return (
            <div> 
                <h1>
                    Connect with us
                </h1>
                <div align="center">
                    <img src="./icons/Messenger.png" className="social-icons"></img>
                    <img src="./icons/GMail.png" className="social-icons"></img>
                </div>
                
                <div>
                <form align="center">
                <label>
                    <br></br>
                     Send your feedback here
                     <br></br>
                     <br></br>
                    <input type="text" className="contact-field" name="name"/>
                </label>
                <br></br>
                <br></br>
                <input className="sub-btn" type="submit" value="Submit" />
                </form>
                </div>
            </div>
        )
    }
}
