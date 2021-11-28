import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default function BSTourism() {
  const questions = [
    {
      questionText: "1)	_________ operates as a legally appointed agent, representing the principal in certain geographic area.",
      answerOptions: [
        { answerText: "Tour Broker", isCorrect: false },
        { answerText: "Travel Agency", isCorrect: true },
        { answerText: "Ground Operator", isCorrect: false },
        { answerText: "Tour Operator", isCorrect: false },
      ],
    },
    {
      questionText: "2)	A travel agency is also called as the ______ of tourist products.",
      answerOptions: [
        { answerText: "Distributor", isCorrect: false },
        { answerText: "Manufacturer", isCorrect: true },
        { answerText: "Wholesaler", isCorrect: false },
        { answerText: "Retailer", isCorrect: false },
      ],
    },
    {
      questionText: "3)	What do you call the routes travelled between the generating areas and tourist destinations?",
      answerOptions: [
        { answerText: "Tourist Routes", isCorrect: false },
        { answerText: "Travel Routes", isCorrect: false },
        { answerText: "Transit Routes", isCorrect: true },
        { answerText: "Geography Routes", isCorrect: false },
      ],
    },
    {
      questionText: "4)	The global code of ethics for tourism was drawn up by which organization?",
      answerOptions: [
        { answerText: "World Trade Organization", isCorrect: false },
        { answerText: "World Tourism Organization", isCorrect: true },
        { answerText: "World Travel Organization", isCorrect: false },
        { answerText: "World Travel and Tourism Council", isCorrect: false },
      ],
    },
    {
      questionText: "5)	What is the first stage of the tourist area lifecycle?",
      answerOptions: [
        { answerText: "Development", isCorrect: false },
        { answerText: "Consolidation", isCorrect: false },
        { answerText: "Involvement", isCorrect: false },
        { answerText: "Exploration", isCorrect: true },
      ],
    },
    {
      questionText: "6)	When visitors are financial supporters of a destination, it is known as:",
      answerOptions: [
        { answerText: "Visitor Repeat", isCorrect: false },
        { answerText: "Visitor Throwback", isCorrect: false },
        { answerText: "Visitor Paycheck", isCorrect: false },
        { answerText: "Visitor Payback", isCorrect: true },
      ],
    },
    {
      questionText: "7)	What does the abbreviation for VTOL stand for?",
      answerOptions: [
        { answerText: "Vertical Take-off and Loading", isCorrect: false },
        { answerText: "Vertical Take-off and Landing", isCorrect: true },
        { answerText: "Vertical Take-out and Landing", isCorrect: false },
        { answerText: "Visitor Take-off and Loading", isCorrect: false },
      ],
    },
    {
      questionText: "8)	Travel Propensity is a measure of _________.",
      answerOptions: [
        { answerText: "The travel frequency of a population", isCorrect: false },
        { answerText: "The ratio of day trips to overnight trips", isCorrect: false },
        { answerText: "The tourism market share of a country", isCorrect: false },
        { answerText: "The percentage of a population engaging in tourism", isCorrect: true },
      ],
    },
    {
      questionText: "9)	What type of statistics calculates the number of tourists visiting a destination in a given time?",
      answerOptions: [
        { answerText: "Volume Statistics", isCorrect: true },
        { answerText: "Resource Statistics", isCorrect: false },
        { answerText: "Expenditure Statistics", isCorrect: false },
        { answerText: "Statistics of Tourist Characteristics", isCorrect: false },
      ],
    },
    {
      questionText: "10)	What concepts need to be considered when studying the geography of travel and tourism?",
        answerOptions: [
        { answerText: "All of the above", isCorrect: true },
        { answerText: "Spatial Scale", isCorrect: false },
        { answerText: "Spatial interaction between the components of the tourism system", isCorrect: false },
        { answerText: "The Geographical components of the tourism system", isCorrect: false },
      ],
    },
    {
      questionText: "11)	The most useful discriminator of income to participate in tourism is",
        answerOptions: [
        { answerText: "Tax Income", isCorrect: false },
        { answerText: "Discretionary Income", isCorrect: true },
        { answerText: "Disposable Income ", isCorrect: false },
        { answerText: "Gross Income", isCorrect: false },
      ],
    },
    {
      questionText: "12)	What is Social Carrying Capacity?",
        answerOptions: [
        { answerText: "A measure of the host community to tolerate tourism", isCorrect: true },
        { answerText: "A measure of the tourist to tolerate other tourists", isCorrect: false },
        { answerText: "A measure of the economic benefit of tourism", isCorrect: false },
        { answerText: "A measure of the environment to tolerate tourism", isCorrect: false },
      ],
    },
    {
      questionText: "13)	__________ is a type of travel agent that is located in the premises of corporate offices to make travel arrangement of employees.",
        answerOptions: [
        { answerText: "Wholesale Travel Agency", isCorrect: false },
        { answerText: "Full-Service Agency", isCorrect: false },
        { answerText: "Online Travel Agency", isCorrect: false },
        { answerText: "Implant Agency", isCorrect: true },
      ],
    },
    {
      questionText: "14)	The link between load factor and pricing is illustrated by what principle?",
        answerOptions: [
        { answerText: "The Marginal Cost Principle", isCorrect: true },
        { answerText: "The Differential Cost Principle", isCorrect: false },
        { answerText: "The Maximum Cost Principle", isCorrect: false },
        { answerText: "The Minimal Cost Principle", isCorrect: false },
      ],
    },
    {
      questionText: "15)	What does WTTC stand for?",
        answerOptions: [
        { answerText: "World Travel and Trade Council", isCorrect: false },
        { answerText: "World Travel and Tourism Council", isCorrect: true },
        { answerText: "World Tourism and Trade Council", isCorrect: false },
        { answerText: "World Trade and Travel Council", isCorrect: false },
      ],
    },
    {
      questionText: "16)	___________ tourism is comprised of inbound tourism and outbound tourism.",
        answerOptions: [
        { answerText: "Domestic", isCorrect: false },
        { answerText: "Local", isCorrect: false },
        { answerText: "International", isCorrect: true },
        { answerText: "National", isCorrect: false },
      ],
    },
    {
      questionText: "17)	What long-term factors will affect demand for tourism?",
        answerOptions: [
        { answerText: "Economic performance of the main generating countries", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
        { answerText: "Demographic changes", isCorrect: false },
        { answerText: "The amount of leisure and holiday time available", isCorrect: false },
      ],
    },
    {
      questionText: "18)	__________ tour operators provide travel services within the tourist’s native country.",
        answerOptions: [
        { answerText: "Inbound", isCorrect: false },
        { answerText: "Outbound", isCorrect: false },
        { answerText: "International", isCorrect: false },
        { answerText: "Domestic", isCorrect: true },
      ],
    },
    {
      questionText:"19)	Which of the following is NOT a type of travel agency?",
        answerOptions: [
        { answerText: "Joint Venture", isCorrect: true },
        { answerText: "Corporate", isCorrect: false },
        { answerText: "Franchising", isCorrect: false },
        { answerText: "Partnership", isCorrect: false },
      ],
    },
    {
      questionText: "20)	_________ is a push marketing strategy used in tourism.",
        answerOptions: [
        { answerText: "Advertisement", isCorrect: false },
        { answerText: "Trade Show Promotion", isCorrect: true },
        { answerText: "Sales Promotion", isCorrect: false },
        { answerText: "Social Media", isCorrect: false },
      ],
    },
    {
      questionText: "21)	Which of the following countries below has the largest population in Asia?",
        answerOptions: [
        { answerText: "China", isCorrect: true },
        { answerText: "Indonesia", isCorrect: false },
        { answerText: "Philippines", isCorrect: false },
        { answerText: "India", isCorrect: false },
      ],
    },
    {
      questionText: "22)	Which of the following cities below is dubbed as the “Financial Capital of the Philippines”?",
        answerOptions: [
        { answerText: "Makati", isCorrect: true },
        { answerText: "Davao", isCorrect: false },
        { answerText: "Muntinlupa", isCorrect: false },
        { answerText: "Manila", isCorrect: false },
      ],
    },
    {
      questionText: "23)	Warsaw is the capital city of which country?",
        answerOptions: [
        { answerText: "Switzerland", isCorrect: false },
        { answerText: "Greenland", isCorrect: false },
        { answerText: "Netherlands", isCorrect: false },
        { answerText: "Poland", isCorrect: true },
      ],
    },
    {
      questionText: "24)	Which of the following provinces is also known as the “Heart of the Philippines”?",
        answerOptions: [
        { answerText: "Quezon", isCorrect: false },
        { answerText: "Romblon", isCorrect: false },
        { answerText: "Palawan", isCorrect: false },
        { answerText: "Marinduque", isCorrect: true },
      ],
    },
    {
      questionText: "25)	Which of these American presidents below cannot found on Mount Rushmore?",
        answerOptions: [
        { answerText: "Ulysses Grant", isCorrect: true },
        { answerText: "George Washington", isCorrect: false },
        { answerText: "Abraham Lincoln", isCorrect: false },
        { answerText: "Thomas Jefferson", isCorrect: false },
      ],
    },
    {
      questionText: "26)	Mount Apo can be found in which city?",
        answerOptions: [
        { answerText: "Tacloban", isCorrect: false },
        { answerText: "Davao", isCorrect: true },
        { answerText: "Cotabato", isCorrect: false },
        { answerText: "Iloilo", isCorrect: false },
      ],
    },
    {
      questionText: "27)	Hanoi is the capital of which country?",
        answerOptions: [
        { answerText: "Thailand", isCorrect: false },
        { answerText: "Singapore", isCorrect: false },
        { answerText: "Malaysia", isCorrect: false },
        { answerText: "Vietnam", isCorrect: true },
      ],
    },
    {
      questionText: "28)	What is the number one tourist destination in the Philippines?",
        answerOptions: [
        { answerText: "Bohol", isCorrect: false },
        { answerText: "Boracay", isCorrect: true },
        { answerText: "Tagaytay", isCorrect: false },
        { answerText: "Cebu City", isCorrect: false },
      ],
    },
    {
      questionText: "29)	Which of the following is NOT part of the Seven Wonders of the World?",
        answerOptions: [
        { answerText: "Big Ben", isCorrect: true },
        { answerText: "The Great Wall of China", isCorrect: false },
        { answerText: "Taj Mahal", isCorrect: false },
        { answerText: "The Roman Colosseum", isCorrect: false },
      ],
    },
    {
      questionText: "30)	The Lost City of Machu Picchu is found in which country?",
        answerOptions: [
        { answerText: "Argentina", isCorrect: false },
        { answerText: "Peru", isCorrect: true },
        { answerText: "Mexico", isCorrect: false },
        { answerText: "Chile", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app" align="center">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <Link to="/gencourses"> Mumu </Link>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
