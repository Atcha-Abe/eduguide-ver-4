import React, { Component } from "react";
import "./Menu.css";
import Card from "../container/Card";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const header = useSelector((state) => state.header);
  return (
    <div align="center">
      <h1>Decide your future.</h1>
      <p>
        EduGuide is a Career Decision Tool optimized to help you make a decision
        in finding the right program corresponding to your strengths, interest,
        and skills.
      </p>
      <p className="small-text">
        Disclaimer: This tool only includes 17 programs offered by St. Paul
        University Manila.
      </p>
      <br></br>
      <br></br>

      {header ? (
        <Link to="/gendesc" className="test-btn" value="submit">
          Take the Test
        </Link>
      ) : (
        <Link to="/login" className="test-btn" value="submit">
          Take the Test
        </Link>
      )}

      <br></br>
      <br></br>
      <Router>
        <Route path="/articles" component={Card} />
        <div>
          <a
            href="https://www.cioinsight.com/careers/it-top-paying-jobs/"
            target="_blank"
          >
            <Card
              title="Top 10 paying jobs in 2021 "
              imageUrl="./images/Top10.png"
            />
          </a>
          <a
            href="https://www.monster.com/career-advice/article/10-future-careers"
            target="_blank"
          >
            <Card
              title="Top 10 careers in 10 years"
              imageUrl="./images/TopCareers.png"
            />
          </a>
          <a
            href="https://blog.coastline.edu/top-10-careers-in-demand-for-2021"
            target="_blank"
          >
            <Card title="In demand careers" imageUrl="./images/InDemand.png" />
          </a>
        </div>
      </Router>
    </div>
  );
}

export default Home;
