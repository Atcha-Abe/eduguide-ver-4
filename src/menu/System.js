import { Component } from "react";
import "./Menu.css";
import Card from "../container/Card";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { header } from "../store/reducers/header";

export default class System extends Component {
  render() {
    return (
      <div>
        <h1> How to Use EduGuide</h1>
        <p>
          EduGuide is a Career Decision Tool optimized to help you make a
          decision in finding the right program <br></br> <br></br>
          Select a card to get started.
        </p>
        <br></br>
        <Router>
          <Route path="/articles" component={Card} />
          <div>
            <Link to="/signup">
              <Card
                title="Create an Account"
                imageUrl="./images/CreateAcc.jpg"
              />
            </Link>
            {header ? (
              <Link to="/welcome">
                <Card title="Take the Test" imageUrl="./images/Test.jpg" />
              </Link>
            ) : (
              <Link to="/login">
                <Card title="Take the Test" imageUrl="./images/Test.jpg" />
              </Link>
            )}

            {header ? (
              <Link to="/community">
                <Card
                  title="Share it with your friends"
                  imageUrl="./images/ShareF.jpg"
                />
              </Link>
            ) : (
              <Link to="/login">
                <Card title="Take the Test" imageUrl="./images/Test.jpg" />
              </Link>
            )}

            <br></br>
          </div>
        </Router>
      </div>
    );
  }
}
