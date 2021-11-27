import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default function BSMarketing () {
  const questions = [
    {
      questionText: "1)	The technique of acquiring material and manufacturing goods only as needed to satisfy customers orders is called as:",
      answerOptions: [
        { answerText: "Economic Order Quantity", isCorrect: false },
        { answerText: "Just in Time", isCorrect: true },
        { answerText: "Maintaining levels of stock", isCorrect: false },
        { answerText: "Buffer Stock", isCorrect: false },
      ],
    },
    {
      questionText: "2)	What is the main symptom of under trading?",
      answerOptions: [
        { answerText: "High Current Ratio", isCorrect: true },
        { answerText: "Low Inventory Turnover Ratio", isCorrect: false },
        { answerText: "High Inventory Turnover Ratio", isCorrect: false },
        { answerText: "Very Efficient Credit Management", isCorrect: false },
      ],
    },
    {
      questionText: "3)	Fill in the blank: Product positioning is an act of _____________",
      answerOptions: [
        { answerText: "occupying a distinct image in the customers’ mind", isCorrect: true },
        { answerText: "marketing through the internet", isCorrect: false },
        { answerText: "distributing through wholesalers", isCorrect: false },
        { answerText: "distributing through retailers", isCorrect: false },
      ],
    },
    {
      questionText: "4)	Which of the following is not a type of decision usually made during the product development stage?",
      answerOptions: [
        { answerText: "Packaging", isCorrect: false },
        { answerText: "Branding", isCorrect: true },
        { answerText: "Product Screening", isCorrect: false },
        { answerText: "Product Positioning", isCorrect: false },
      ],
    },
    {
      questionText: "5)	Labeling and packaging are associated with:",
      answerOptions: [
        { answerText: "Price Mix", isCorrect: false },
        { answerText: "Promotion Mix", isCorrect: false },
        { answerText: "Product Mix", isCorrect: true },
        { answerText: "Place Mix", isCorrect: false },
      ],
    },
    {
      questionText: "6)	If a company wishes to test its positioning strategy, advertising, distribution, pricing, branding, and packaging, and budget levels, it can do so during which of the following stages of the new-product development process?",
      answerOptions: [
        { answerText: "Product Development", isCorrect: false },
        { answerText: "Concept Testing", isCorrect: false },
        { answerText: "Test Marketing", isCorrect: true },
        { answerText: "Test Marketing", isCorrect: false },
      ],
    },
    {
      questionText: "7)	Original products, product improvements, product modifications, and new brands that a firm develops through its own research and development efforts are called:",
      answerOptions: [
        { answerText: "Altered Products", isCorrect: false },
        { answerText: "Supplemental Products", isCorrect: false },
        { answerText: "New Products", isCorrect: true },
        { answerText: "Concept Products", isCorrect: false },
      ],
    },
    {
      questionText: "8)	A label performs several functions for a product. These include all of the following EXCEPT:",
      answerOptions: [
        { answerText: "classifies", isCorrect: true },
        { answerText: "grades", isCorrect: false },
        { answerText: "promotes", isCorrect: false },
        { answerText: "describes", isCorrect: false },
      ],
    },
    {
      questionText: "9)	What stage in the product life cycle focuses on using a cost-plus formula and creating product awareness and trial?",
      answerOptions: [
        { answerText: "Introduction Stage", isCorrect: true },
        { answerText: "Maturity Stage", isCorrect: false },
        { answerText: "Growth Stage", isCorrect: false },
        { answerText: "Decline Stage", isCorrect: false },
      ],
    },
    {
      questionText: "10)	Which of the following is not one of the general pricing approaches?",
        answerOptions: [
        { answerText: "Relationship Pricing", isCorrect: false },
        { answerText: "Penetration Pricing", isCorrect: true },
        { answerText: "Cost-based", isCorrect: false },
        { answerText: "Value-based", isCorrect: false },
      ],
    },
    {
      questionText: "11)	Which of the following is NOT one of the product mix and service mix pricing strategies?",
        answerOptions: [
        { answerText: "Product line", isCorrect: false },
        { answerText: "Bundle", isCorrect: false },
        { answerText: "Complementary", isCorrect: true },
        { answerText: "By-product", isCorrect: false },
      ],
    },
    {
      questionText: "12)	Which of the following below is NOT a function of packaging?",
        answerOptions: [
        { answerText: "It determines product quality.", isCorrect: true },
        { answerText: "It protects children.", isCorrect: false },
        { answerText: "It contains the brand mark.", isCorrect: false },
        { answerText: "Its purpose is to contain and protect the product", isCorrect: false },
      ],
    },
    {
      questionText: "13)	To achieve the marketing objectives for the brand and satisfy the desires of consumers, the ________ and functional components of packaging must be chosen correctly.",
        answerOptions: [
        { answerText: "Logo", isCorrect: false },
        { answerText: "Brand Name", isCorrect: false },
        { answerText: "Characters", isCorrect: false },
        { answerText: "Aesthetics", isCorrect: true },
      ],
    },
    {
      questionText: "14)	Which of the following is not an effective action that a company can take to combat a competitor's price cut on a product?",
        answerOptions: [
        { answerText: "Improve quality and increase price", isCorrect: false },
        { answerText: "Improve quality and decrease price", isCorrect: true },
        { answerText: "Raise perceived value", isCorrect: false },
        { answerText: "Launch a low-price 'fighter brand'", isCorrect: false },
      ],
    },
    {
      questionText: "15)	Which of the following sets the floor for the price that the company can charge for its product?",
        answerOptions: [
        { answerText: "Nonprofit Factors", isCorrect: true },
        { answerText: "Supply", isCorrect: false },
        { answerText: "Demand", isCorrect: false },
        { answerText: "Costs", isCorrect: false },
      ],
    },
    {
      questionText: "16)	Which one of the following 4Ps of marketing mix involves in decisions regarding list prices, discounts, allowances and payment periods or credit terms?",
        answerOptions: [
        { answerText: "Price", isCorrect: true },
        { answerText: "Promotion", isCorrect: false },
        { answerText: "Place", isCorrect: false },
        { answerText: "Product", isCorrect: false },
      ],
    },
    {
      questionText: "17)	Which of the following groups would you consider on priority, when a new product is to be introduced into the market?",
        answerOptions: [
        { answerText: "Dealers", isCorrect: false },
        { answerText: "Employees", isCorrect: false },
        { answerText: "Competitors", isCorrect: true },
        { answerText: "Consumers", isCorrect: false },
      ],
    },
    {
      questionText: "18)	Marketing myopia refers to:",
        answerOptions: [
        { answerText: "Functions of Marketing", isCorrect: false },
        { answerText: "Scope of Marketing", isCorrect: false },
        { answerText: "Broad perception of Marketing", isCorrect: false },
        { answerText: "Narrow perception of Marketing", isCorrect: true },
      ],
    },
    {
      questionText:"19)	What is the process of planning, analyzing, controlling, and implementing the activities of a sales force called?",
        answerOptions: [
        { answerText: "Direct Sales Management", isCorrect: false },
        { answerText: "Indirect Sales Management", isCorrect: false },
        { answerText: "Persuasion Management", isCorrect: false },
        { answerText: "Sales Force Management", isCorrect: true },
      ],
    },
    {
      questionText: "20)	The Field Sales Force is also called as:",
        answerOptions: [
        { answerText: "Channel Intermediaries", isCorrect: false },
        { answerText: "Inside Sales Force", isCorrect: false },
        { answerText: "Outside Sales Force", isCorrect: true },
        { answerText: "None of the Above", isCorrect: false },
      ],
    },
    {
      questionText: "21)	What is the business buying situation in which the buyer reorders the same order repeatedly on a routinely basis?",
        answerOptions: [
        { answerText: "Modified Rebuy", isCorrect: false },
        { answerText: "Straight Rebuy", isCorrect: true },
        { answerText: "Solutions Selling", isCorrect: false },
        { answerText: "New Task", isCorrect: false },
      ],
    },
    {
      questionText: "22)	What is the tool of sales promotion that is used to trigger short term customer involvement or to build customer relationships?",
        answerOptions: [
        { answerText: "Consumer Promotion", isCorrect: true },
        { answerText: "Organizational Promotion", isCorrect: false },
        { answerText: "Inbound Promotion", isCorrect: false },
        { answerText: "Outbound Promotion", isCorrect: false },
      ],
    },
    {
      questionText: "23)	The decrease in average per unit cost of production which is caused by accumulated experience of production is classified as:",
        answerOptions: [
        { answerText: "Learning Curve", isCorrect: false },
        { answerText: "Experience Curve", isCorrect: true },
        { answerText: "Pricing Curve", isCorrect: false },
        { answerText: "Costing Curve", isCorrect: false },
      ],
    },
    {
      questionText: "24)	What is the sales promotion tool in which resellers are persuaded to carry the brand, provide shelf space, promote advertising and push to final buyers?",
        answerOptions: [
        { answerText: "Event Promotion", isCorrect: false },
        { answerText: "Off Deal Promotion", isCorrect: false },
        { answerText: "Trade Promotion", isCorrect: true },
        { answerText: "Point of Purchase Promotion", isCorrect: false },
      ],
    },
    {
      questionText: "25)	Which of the following is NOT an internal user of management information?25)	The logistic network through which the unwanted or excess products by resellers or consumers is classified as:",
        answerOptions: [
        { answerText: "Forward Distribution", isCorrect: false },
        { answerText: "Reverse Distribution", isCorrect: true },
        { answerText: "Inbound Distribution", isCorrect: false },
        { answerText: "Outbound Distribution", isCorrect: false },
      ],
    },
    {
      questionText: "26)	In __________, consumers who initially try the product at no cost are reoffered the product, or a competitors' product, at slightly reduced prices.",
        answerOptions: [
        { answerText: "Commercialization", isCorrect: false },
        { answerText: "Controlled Test Marketing", isCorrect: false },
        { answerText: "Simulated Test Marketing", isCorrect: false },
        { answerText: "Sales-Wave Research", isCorrect: true },
      ],
    },
    {
      questionText: "27)	Which of the following is price reduction offered when an order is placed in slack/drooping period?",
        answerOptions: [
        { answerText: "Quantity Discount", isCorrect: true },
        { answerText: "Seasonal Discount", isCorrect: false },
        { answerText: "Cash discount", isCorrect: false },
        { answerText: "Trade Discount", isCorrect: false },
      ],
    },
    {
      questionText: "28)	Which of the following is NOT one of the stages that customers go through in the process of adopting a new product?",
        answerOptions: [
        { answerText: "Interest", isCorrect: false },
        { answerText: "Awareness", isCorrect: false },
        { answerText: "Evaluation", isCorrect: false },
        { answerText: "Desire", isCorrect: true },
      ],
    },
    {
      questionText: "29)	The Three Layers of Packaging are:",
        answerOptions: [
        { answerText: "Primary, Secondary & Tertiary Packaging", isCorrect: true },
        { answerText: "Shipping, Inner & Outer Packaging", isCorrect: false },
        { answerText: "Primary, Secondary & Shipping Packaging", isCorrect: true },
        { answerText: "Beginning, Middle & End Packaging", isCorrect: false },
      ],
    },
    {
      questionText: "30)	Which of the following is NOT an objective of discounts?",
        answerOptions: [
        { answerText: "Reward competitors", isCorrect: true },
        { answerText: "Reward valuable customers", isCorrect: false },
        { answerText: "Increase short-term sales", isCorrect: false },
        { answerText: "Move out-of-date stock", isCorrect: false },
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
