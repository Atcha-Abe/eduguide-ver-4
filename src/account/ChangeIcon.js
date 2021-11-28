import React, { useState, Component } from "react";
import "./Account.css";
import "antd/dist/antd.css";
import { Avatar } from "antd";
import ProfilePicChanger from "../components/ProfilePicChanger";

import { tsConstructorType } from "@babel/types";
import { Link } from "react-router-dom";

class ChangeIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
    };
  }

  handleImageChange = (profileImage) => {
    this.setState({
      profileImage,
    });
  };

  render() {
    return (
      <div align="center">
        <h3>Change Icon</h3>
        <Avatar size={100} icon="user" src={this.state.profileImage} />
        <ProfilePicChanger handleImageChange={this.handleImageChange} />
        <div className="change-btn">
          <Link to="/EditProfile" className="reg-btn" value="Cancel">
            Cancel
          </Link>
        </div>
        <p className="bottom_p">
          <b>Make the right decision.</b>
        </p>
      </div>
    );
  }
}
export default ChangeIcon;
