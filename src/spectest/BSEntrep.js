import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
import { triggerAsyncId } from "async_hooks";
export default function BSEntrep() {
  const questions = [
    {
      questionText: "1)	A Business Plan should be prepared by who?",
      answerOptions: [
        { answerText: "Entrepreneurs", isCorrect: true },
        { answerText: "Employees", isCorrect: false },
        { answerText: "Consultants", isCorrect: false },
        { answerText: "Administration Services", isCorrect: false },
      ],
    },
    {
      questionText: "2)	What is the primary concern of founders who trade equity for capital for their growing venture?",
      answerOptions: [
        { answerText: "Control", isCorrect: false },
        { answerText: "Investor capabilities", isCorrect: false },
        { answerText: "Capitalization", isCorrect: true },
        { answerText: "Valuation", isCorrect: false },
      ],
    },
    {
      questionText: "3)	Which of the following factors would not be included in a PESTLE analysis?",
      answerOptions: [
        { answerText: "Demographic changes", isCorrect: false },
        { answerText: "Competitor activity", isCorrect: true },
        { answerText: "Government re-cycling policy", isCorrect: false },
        { answerText: "Proposed reduction in interest rates", isCorrect: false },
      ],
    },
    {
      questionText: "4)	Why are small businesses important to a country’s economy?",
      answerOptions: [
        { answerText: "They can provide specialist support to larger companies", isCorrect: false },
        { answerText: "They can be innovators of new products", isCorrect: false },
        { answerText: "They give an outlet for entrepreneurs", isCorrect: false },
        { answerText: "All the above", isCorrect: true },
      ],
    },
    {
      questionText: "5)	The use of informal networks by entrepreneurs to gather information is known as _________.",
      answerOptions: [
        { answerText: "Entrepreneurial Networking", isCorrect: false },
        { answerText: "Informal Parameters", isCorrect: true },
        { answerText: "Secondary Research", isCorrect: false },
        { answerText: "Marketing", isCorrect: false },
      ],
    },
    {
      questionText: "6)	Which of the following statements below is false?",
      answerOptions: [
        { answerText: "Selling is essentially a matching process.", isCorrect: false },
        { answerText: "Market segmentation is a useful process for small businesses to undertake.", isCorrect: true },
        { answerText: "It is a good idea for small businesses to compete solely on price.", isCorrect: false },
        { answerText: "A benefit is the value of a product feature to a customer.", isCorrect: false },
      ],
    },
    {
      questionText: "7)	Someone legally appointed to resolve the financial difficulties of an insolvent firm is called ____________.",
      answerOptions: [
        { answerText: "an administrator", isCorrect: true },
        { answerText: "an auditor", isCorrect: false },
        { answerText: "a turnaround consultant", isCorrect: false },
        { answerText: "a predator", isCorrect: false },
      ],
    },
    {
      questionText: "8)	___________ is a form of financing especially for funding high technology, high risk and perceived high reward projects.",
      answerOptions: [
        { answerText: "Venture Capital", isCorrect: true },
        { answerText: "Fixed Capital", isCorrect: false },
        { answerText: "Current Capital", isCorrect: false },
        { answerText: "Seed Capital", isCorrect: false },
      ],
    },
    {
      questionText: "9)	Ownership capital is also known as _________.",
      answerOptions: [
        { answerText: "Mortgage", isCorrect: false },
        { answerText: "Equity", isCorrect: true },
        { answerText: "Loan", isCorrect: false },
        { answerText: "Debt", isCorrect: false },
      ],
    },
    {
      questionText: "10)	A corporate manager who starts a new initiative for their company which entails setting up a new distinct business unit and board of directors can be regarded as a:",
        answerOptions: [
        { answerText: "Social Entrepreneur", isCorrect: false },
        { answerText: "Intrapreneur", isCorrect: true },
        { answerText: "Ecopreneur", isCorrect: false },
        { answerText: "Technopreneur", isCorrect: false },
      ],
    },
    {
      questionText: "11)	Which industrial sector tends to naturally promote small-scale businesses and Entrepreneurship, and generally has lower barriers to market entry?",
        answerOptions: [
        { answerText: "Agriculture", isCorrect: false },
        { answerText: "Distribution", isCorrect: false },
        { answerText: "Manufacturing", isCorrect: false },
        { answerText: "Service", isCorrect: true },
      ],
    },
    {
      questionText: "12)	_____________ is used to accomplish the project economically in the minimum available time with limited resources.",
        answerOptions: [
        { answerText: "Network Analysis", isCorrect: false },
        { answerText: "Budget Analysis", isCorrect: false },
        { answerText: "Critical Planning", isCorrect: false },
        { answerText: "Project Scheduling", isCorrect: true },
      ],
    },
    {
      questionText: "13)	Which of the following describes the process of creating something new?",
        answerOptions: [
        { answerText: "Innovation", isCorrect: true },
        { answerText: "Modeling", isCorrect: false },
        { answerText: "Creative Flexibility", isCorrect: false },
        { answerText: "Business Model", isCorrect: false },
      ],
    },
    {
      questionText: "14)	What do you call an entrepreneur who owns more than one business at a time?",
        answerOptions: [
        { answerText: "An Intrapreneur", isCorrect: false },
        { answerText: "A Portfolio Entrepreneur", isCorrect: true },
        { answerText: "A Corporate Entrepreneur", isCorrect: false },
        { answerText: "An Executive Entrepreneur", isCorrect: false },
      ],
    },
    {
      questionText: "15)	The expenses incurred on the setting up of the enterprise are called as ______________.",
        answerOptions: [
        { answerText: "Cost of Financing", isCorrect: false },
        { answerText: "Cost of Promotion", isCorrect: true },
        { answerText: "Cost of Current Assets", isCorrect: false },
        { answerText: "Cost of Fixed Assets", isCorrect: false },
      ],
    },
    {
      questionText: "16)	Activities which must be finished before a given event can occur are termed as __________.",
        answerOptions: [
        { answerText: "Concurrent Activities", isCorrect: false },
        { answerText: "Dummy Activities", isCorrect: false },
        { answerText: "Preceding Activities", isCorrect: true },
        { answerText: "Succeeding Activities", isCorrect: false },
      ],
    },
    {
      questionText: "17)	What does the letter ‘T’ in PESTLE analysis stand for?",
        answerOptions: [
        { answerText: "Training", isCorrect: false },
        { answerText: "Technology", isCorrect: true },
        { answerText: "Time", isCorrect: false },
        { answerText: "Talent", isCorrect: false },
      ],
    },
    {
      questionText: "18)	Decisions taken by an entrepreneur on behalf of his enterprise are known as ______________.",
        answerOptions: [
        { answerText: "Personal Decisions", isCorrect: false },
        { answerText: "Routine Decisions", isCorrect: false },
        { answerText: "Organizational Decisions", isCorrect: true },
        { answerText: "Strategic Decisions ", isCorrect: false },
      ],
    },
    {
      questionText:"19)	Goods or services reach the market place through ______________.",
        answerOptions: [
        { answerText: "Marketing Channels", isCorrect: true },
        { answerText: "Monopolies", isCorrect: false },
        { answerText: "Monopolies", isCorrect: false },
        { answerText: "Multilevel Pyramids", isCorrect: false },
      ],
    },
    {
      questionText: "20)	What do you call the business arrangement where one party allows another party to use a business name and sell its products or services?",
        answerOptions: [
        { answerText: "An owner-manager business", isCorrect: false },
        { answerText: "A limited company", isCorrect: false },
        { answerText: "A cooperative", isCorrect: false },
        { answerText: "A franchise", isCorrect: true },
      ],
    },
    {
      questionText: "21)	Which of the following below is used to call a statement that shows the financial status of the company at any given time?21)	Which of the following sources is NOT used for medium term financing?",
        answerOptions: [
        { answerText: "Term loans from banks", isCorrect: false },
        { answerText: "Sale of current asset", isCorrect: true },
        { answerText: "Issue of equity shares", isCorrect: false },
        { answerText: "Issue of debentures", isCorrect: false },
      ],
    },
    {
      questionText: "22)	Which of the following is a recognized disadvantage of setting up as a start-up as compared with other routes to market entry?",
        answerOptions: [
        { answerText: "There is a high failure rate", isCorrect: true },
        { answerText: "There are more funds required", isCorrect: false },
        { answerText: "less help from various agencies", isCorrect: false },
        { answerText: "less satisfaction of the owners", isCorrect: false },
      ],
    },
    {
      questionText: "23)	Which of the following below has the riskiest investment?",
        answerOptions: [
        { answerText: "Land", isCorrect: false },
        { answerText: "Preference Shares", isCorrect: false },
        { answerText: "Equity Shares", isCorrect: false },
        { answerText: " Debentures", isCorrect: true },
      ],
    },
    {
      questionText: "24)	Having more than 50% ownership position that provides the entrepreneur with managerial control is called:",
        answerOptions: [
        { answerText: "Majority Interest", isCorrect: true },
        { answerText: "Horizontal Merger", isCorrect: false },
        { answerText: "Diversified Activity Merger", isCorrect: false },
        { answerText: "Joint Venture", isCorrect: false },
      ],
    },
    {
      questionText: "25)	Which of the following is used by entrepreneurs to acquire experience in an international market before making a major commitment?",
        answerOptions: [
        { answerText: "Minority Interest", isCorrect: true },
        { answerText: "Majority Interest", isCorrect: false },
        { answerText: "Merger", isCorrect: false },
        { answerText: "Joint Venture", isCorrect: false },
      ],
    },
    {
      questionText: "26)	What is the aim of a strategy canvas?",
        answerOptions: [
        { answerText: "To beat competitors on prices", isCorrect: false },
        { answerText: "To avoid overspending", isCorrect: false },
        { answerText: "To increase a produce range", isCorrect: false },
        { answerText: "To move towards an uncontested market space", isCorrect: true },
      ],
    },
    {
      questionText: "27)	Which of the following statements below is correct?",
        answerOptions: [
        { answerText: "Getting a patent guarantees a regular income for your invention,", isCorrect: false },
        { answerText: "A Patent is an exclusive right granted for an invention.", isCorrect: true },
        { answerText: "Both A and B", isCorrect: false },
        { answerText: "None of the Above", isCorrect: false },
      ],
    },
    {
      questionText: "28)	As a new company grows, the entrepreneur will need to ______________.",
        answerOptions: [
        { answerText: "Build a Management Team", isCorrect: false },
        { answerText: "Ensure Financial Controls are Maintained", isCorrect: false },
        { answerText: "Be responsive to the changes in the market", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
      ],
    },
    {
      questionText: "29)	The granting of cash subsidy on the capital investment is called ______________.",
        answerOptions: [
        { answerText: "Concessional Finance", isCorrect: true },
        { answerText: "Interest Subsidy", isCorrect: false },
        { answerText: "Central Investment Subsidy", isCorrect: false },
        { answerText: "Quantum of Subsidy", isCorrect: false },
      ],
    },
    {
      questionText: "30)	What is the role of a Business Angel?",
        answerOptions: [
        { answerText: "To provide capital for business development in exchange for a stake in the Business ownership.", isCorrect: true },
        { answerText: "To assist an entrepreneur to open a lifestyle business.", isCorrect: false },
        { answerText: "To provide small business advice.", isCorrect: false },
        { answerText: "To set up a franchise business.", isCorrect: false },
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
