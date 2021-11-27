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
        { answerText: "Manufacturing", isCorrect: true },
      ],
    },
    {
      questionText: "12)	What do we do to find out the value of the closing stock during the end of the financial year?",
        answerOptions: [
        { answerText: "Look in the stock account", isCorrect: false },
        { answerText: "Deduct opening stock from the cost of goods sold", isCorrect: false },
        { answerText: "Deduct the cost of goods sold from sales", isCorrect: false },
        { answerText: "Perform Stock taking", isCorrect: true },
      ],
    },
    {
      questionText: "13)	Return on Investment Ratio (ROI) = ___________.",
        answerOptions: [
        { answerText: "(Net profit / Total assets) x 100", isCorrect: true },
        { answerText: "(Net profit / Total assets) x 100", isCorrect: false },
        { answerText: "(Net profit / Sales) x 100", isCorrect: false },
        { answerText: "(Gross profit x Sales / Fixed assets) x 100", isCorrect: false },
      ],
    },
    {
      questionText: "14)	Which of the following is the external user of financial statements?",
        answerOptions: [
        { answerText: "Government agency", isCorrect: false },
        { answerText: "Creditor of the business", isCorrect: false },
        { answerText: "Manager of the business", isCorrect: true },
        { answerText: "Shareholder of the business", isCorrect: false },
      ],
    },
    {
      questionText: "15)	___________ is the withdrawal of cash and goods by the owner of the business for his/her personal use.",
        answerOptions: [
        { answerText: "Drawings", isCorrect: true },
        { answerText: "Deprecation", isCorrect: false },
        { answerText: "Appreciation", isCorrect: false },
        { answerText: "Outflow of cash", isCorrect: false },
      ],
    },
    {
      questionText: "16)	Which of the following statements BEST explains fixed assets?",
        answerOptions: [
        { answerText: "They are items which will not wear out quickly", isCorrect: false },
        { answerText: "They are expensive items bought for the business", isCorrect: false },
        { answerText: "They are of long life and are not purchased specifically for resale", isCorrect: true },
        { answerText: "They are bought to be used in the business", isCorrect: false },
      ],
    },
    {
      questionText: "17)	Gross profit = ____________.",
        answerOptions: [
        { answerText: "Net profit – Expenses", isCorrect: false },
        { answerText: "Cost of goods sold + Opening stock", isCorrect: false },
        { answerText: "Sales – Purchases", isCorrect: false },
        { answerText: "Sales – Cost of goods sold", isCorrect: true },
      ],
    },
    {
      questionText: "18)	Goods returned by the customer should be debited to which of the following accounts?",
        answerOptions: [
        { answerText: "Sales income account", isCorrect: false },
        { answerText: "Return inward account", isCorrect: true },
        { answerText: "Expenses account", isCorrect: false },
        { answerText: "Sales account", isCorrect: false },
      ],
    },
    {
      questionText:"19)	The assets that can be converted into cash within a short period (1 year or less) are also known as? ",
        answerOptions: [
        { answerText: "Fixed Assets", isCorrect: false },
        { answerText: "Current Assets", isCorrect: true },
        { answerText: "Intangible assets", isCorrect: false },
        { answerText: "Investments", isCorrect: false },
      ],
    },
    {
      questionText: "20)	When a petty cash book is kept there will be _______.",
        answerOptions: [
        { answerText: "Fewer entries made in the general ledger", isCorrect: true },
        { answerText: "More entries made in the general ledger", isCorrect: false },
        { answerText: "The same number of entries in the general ledger", isCorrect: false },
        { answerText: "No entries made at all in the general ledger for items paid by petty cash", isCorrect: false },
      ],
    },
    {
      questionText: "21)	Which of the following below is used to call a statement that shows the financial status of the company at any given time?",
        answerOptions: [
        { answerText: "Cash Book", isCorrect: false },
        { answerText: "Balance Sheet", isCorrect: true },
        { answerText: "Trading Account", isCorrect: false },
        { answerText: "Profit & Loss Statement", isCorrect: false },
      ],
    },
    {
      questionText: "22)	What is the measure of how efficiently the assets resources are employed by the firm called?",
        answerOptions: [
        { answerText: "Leverage Ratio", isCorrect: false },
        { answerText: "Liquidity Ratio", isCorrect: false },
        { answerText: "Profitability Ratio", isCorrect: false },
        { answerText: "Activity Ratio", isCorrect: true },
      ],
    },
    {
      questionText: "23)	____________ are the basis of the business’s financial accounting.",
        answerOptions: [
        { answerText: "Bookkeeping", isCorrect: false },
        { answerText: "Accounting records", isCorrect: false },
        { answerText: "Sales Volume", isCorrect: false },
        { answerText: "Both A & B", isCorrect: true },
      ],
    },
    {
      questionText: "24)	Which of the following is the external user of financial statements?",
        answerOptions: [
        { answerText: "CEO of the business", isCorrect: false },
        { answerText: "Controller of the business", isCorrect: false },
        { answerText: "Creditor of the business", isCorrect: true },
        { answerText: "Manager of the business", isCorrect: false },
      ],
    },
    {
      questionText: "25)	Cash flow is also known as _________.",
        answerOptions: [
        { answerText: "Fund Flow Statement", isCorrect: true },
        { answerText: "Balance Sheet Flow", isCorrect: false },
        { answerText: "Profit and Loss Account", isCorrect: false },
        { answerText: "Notes and Schedules", isCorrect: false },
      ],
    },
    {
      questionText: "26)	__________ is a structured representation of the financial performance and financial position of a business and changes over a period of time.",
        answerOptions: [
        { answerText: "Balance sheet", isCorrect: false },
        { answerText: "Financial statement", isCorrect: true },
        { answerText: "Profit and Loss account", isCorrect: false },
        { answerText: "Internal audit", isCorrect: false },
      ],
    },
    {
      questionText: "27)	Financial accounting cover overall performance of the _______.",
        answerOptions: [
        { answerText: "Company", isCorrect: true },
        { answerText: "Competitors", isCorrect: false },
        { answerText: "Market", isCorrect: false },
        { answerText: "Finance department", isCorrect: false },
      ],
    },
    {
      questionText: "28)	Which among the following below is NOT a limitation of financial accounting?",
        answerOptions: [
        { answerText: "The data available is historical in nature", isCorrect: false },
        { answerText: "Inadequate information to fix up the price of products manufactured", isCorrect: false },
        { answerText: "Lack of data for comparison of cost of operation of the firm with other firms in the industry", isCorrect: false },
        { answerText: "Complies with the various legal requirements", isCorrect: true },
      ],
    },
    {
      questionText: "29)	Which ratio measures the number of times the receivables are rotated in a year in terms of sales?",
        answerOptions: [
        { answerText: "Creditors Velocity Ratio", isCorrect: true },
        { answerText: "Stock Turnover Ratio", isCorrect: false },
        { answerText: "Debtors Turnover Ratio", isCorrect: false },
        { answerText: "Working Capital Turnover Ratio", isCorrect: false },
      ],
    },
    {
      questionText: "30)	Low turnover of stock ratio indicates",
        answerOptions: [
        { answerText: "Overinvestment in inventory", isCorrect: true },
        { answerText: "Solvency Position", isCorrect: false },
        { answerText: "Monopoly Situation", isCorrect: false },
        { answerText: "Liquidity Position", isCorrect: false },
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
