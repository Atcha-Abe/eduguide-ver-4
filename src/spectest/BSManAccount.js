import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default function BSManAccount() {
  const questions = [
    {
      questionText: "1)	Which phrase best describes the current role of the managerial accountant?",
      answerOptions: [
        { answerText: "Managerial accountants facilitate the decision-making process within an organization.", isCorrect: true },
        { answerText: "Managerial accountants are primarily information collectors.", isCorrect: false },
        { answerText: "Managerial accountants prepare the financial statements for an organization.", isCorrect: false },
        { answerText: "Managerial Accountants are solely staff advisors in an organization.", isCorrect: false },
      ],
    },
    {
      questionText: "2)	All of the following statements regarding budgeting is true EXCEPT:",
      answerOptions: [
        { answerText: "Budgeting is a key ingredient in good decision-making.", isCorrect: false },
        { answerText: "Budgeting helps managers determine the resources needed to meet their goals and objectives.", isCorrect: false },
        { answerText: "The focus of budgeting is planning.", isCorrect: false },
        { answerText: "Budgeting is a bookkeeping task", isCorrect: true },
      ],
    },
    {
      questionText: "3)	As production increases within the relevant range, ________.",
      answerOptions: [
        { answerText: "variable costs will vary in total.", isCorrect: true },
        { answerText: "fixed costs will vary in total.", isCorrect: false },
        { answerText: "variable costs will vary on a per unit basis.", isCorrect: false },
        { answerText: "fixed and variable cost stay the same in total.", isCorrect: false },
      ],
    },
    {
      questionText: "4)	Managerial accounting information is generally prepared for _______.",
      answerOptions: [
        { answerText: "Managers", isCorrect: true },
        { answerText: "Competitors", isCorrect: false },
        { answerText: "Stakeholders", isCorrect: false },
        { answerText: "Government Agencies", isCorrect: false },
      ],
    },
    {
      questionText: "5)	Which of the following statements regarding graphs of fixed and variable costs is true?",
      answerOptions: [
        { answerText: "Fixed costs are zero when production is equal to zero.", isCorrect: false },
        { answerText: "Fixed costs can be represented by a straight line starting at the origin and continuing through each data point.", isCorrect: false },
        { answerText: "Variable costs are zero when production is equal to zero.", isCorrect: true },
        { answerText: "Variable costs can be represented by a straight line where costs are the same for each data point.", isCorrect: false },
      ],
    },
    {
      questionText: "6)	Which of the following below is NOT used in management accounting?",
      answerOptions: [
        { answerText: "Fund Flow Statement", isCorrect: false },
        { answerText: "Cash Flow Statement", isCorrect: false },
        { answerText: "Process Costing", isCorrect: true },
        { answerText: "Ratio Analysis", isCorrect: false },
      ],
    },
    {
      questionText: "7)	Time that a company takes to create and produce a new product is classified as",
      answerOptions: [
        { answerText: "Time Factor", isCorrect: true },
        { answerText: "Chain Factor", isCorrect: false },
        { answerText: "Customer Factor", isCorrect: false },
        { answerText: "Management Factor", isCorrect: false },
      ],
    },
    {
      questionText: "8)	An accounting approach in which expected benefits exceed the expected cost is classified as:",
      answerOptions: [
        { answerText: "Cost Approach", isCorrect: true },
        { answerText: "Benefit Approach", isCorrect: false },
        { answerText: "Accounting Approach", isCorrect: false },
        { answerText: "Cost-Benefit Approach", isCorrect: false },
      ],
    },
    {
      questionText: "9)	Quantitative expression of decided plan and coordination for implementation is known as:",
      answerOptions: [
        { answerText: "Decided Plan", isCorrect: false },
        { answerText: "Budget", isCorrect: true },
        { answerText: "Cost Format", isCorrect: false },
        { answerText: "Coordination Plan", isCorrect: false },
      ],
    },
    {
      questionText: "10)	Working capital is the capital required to finance what which of the following below?",
        answerOptions: [
        { answerText: "Settlement of long-term liabilities", isCorrect: false },
        { answerText: "Day to day operations", isCorrect: true },
        { answerText: "Purchase of fixed assets", isCorrect: false },
        { answerText: "All of the Above", isCorrect: false },
      ],
    },
    {
      questionText: "11)	The time value of money focuses on",
        answerOptions: [
        { answerText: "Cash Flow", isCorrect: true },
        { answerText: "Current Earnings", isCorrect: false },
        { answerText: "Accounting Net Income", isCorrect: false },
        { answerText: "Earnings per share", isCorrect: false },
      ],
    },
    {
      questionText: "12)	A cash flow statement is a statement which portrays the changes in the cash position between _______ accounting periods.",
        answerOptions: [
        { answerText: "three", isCorrect: false },
        { answerText: "five", isCorrect: false },
        { answerText: "four", isCorrect: false },
        { answerText: "two", isCorrect: true },
      ],
    },
    {
      questionText: "13)	The ratios which reflect managerial efficiency in handling the assets is__________.",
        answerOptions: [
        { answerText: "Profitability Ratios", isCorrect: false },
        { answerText: "Turnover Ratios", isCorrect: true },
        { answerText: "Long Term Solvency Ratio", isCorrect: false },
        { answerText: "Short Term Solvency Ratio", isCorrect: false },
      ],
    },
    {
      questionText: "14)	Which ratio measures the number of times the receivables are rotated in a year in terms of sales?",
        answerOptions: [
        { answerText: "Creditors velocity ratio", isCorrect: false },
        { answerText: "Working capital turnover ratio", isCorrect: false },
        { answerText: "Debtors turnover ratio", isCorrect: true },
        { answerText: "Stock turnover ratio", isCorrect: false },
      ],
    },
    {
      questionText: "15)  Current assets – (stock + prepaid expenses) =______________.",
        answerOptions: [
        { answerText: "liquid assets", isCorrect: true },
        { answerText: "fictitious assets", isCorrect: false },
        { answerText: "current assets", isCorrect: false },
        { answerText: "havefixed assets", isCorrect: false },
      ],
    },
    {
      questionText: "16)	Financial statements are classified into how many statements?",
        answerOptions: [
        { answerText: "two", isCorrect: false },
        { answerText: "three", isCorrect: false },
        { answerText: "four", isCorrect: true },
        { answerText: "five", isCorrect: false },
      ],
    },
    {
      questionText: "17)	An increase in selling price ________.",
        answerOptions: [
        { answerText: "optimizes the break-even point", isCorrect: false },
        { answerText: "increases the break-even point", isCorrect: false },
        { answerText: "decreases the break-even point", isCorrect: true },
        { answerText: "does not affect the break-even point", isCorrect: false },
      ],
    },
    {
      questionText: "18)	The cost expended in the past that cannot be retrieved on product or service is called:",
        answerOptions: [
        { answerText: "Sunk Cost", isCorrect: true },
        { answerText: "Product Cost", isCorrect: false },
        { answerText: "Relevant Cost", isCorrect: false },
        { answerText: "Irrelevant Cost", isCorrect: false },
      ],
    },
    {
      questionText:"19)	An example of qualitative data is:",
        answerOptions: [
        { answerText: "Net Worth", isCorrect: true },
        { answerText: "Net Income", isCorrect: false },
        { answerText: "Customer Satisfaction", isCorrect: false },
        { answerText: "Product Cost", isCorrect: false },
      ],
    },
    {
      questionText: "20)	When a manufacturing process requires mostly human labor and there are widely varying wage rates among workers, what is probably the most appropriate basis of applying factory costs to work in process?",
        answerOptions: [
        { answerText: "Direct labor hours", isCorrect: true },
        { answerText: "Direct labor used", isCorrect: false },
        { answerText: "Machine hours", isCorrect: false },
        { answerText: "Cost of Materials used", isCorrect: false },
      ],
    },
    {
      questionText: "21)	Shareholder funds + Long-term loans = _________.",
        answerOptions: [
        { answerText: "Current liabilities", isCorrect: false },
        { answerText: "Capital employed", isCorrect: true },
        { answerText: "current assets", isCorrect: false },
        { answerText: "fixed assets", isCorrect: false },
      ],
    },
    {
      questionText: "22)	Which of the following statements are TRUE about Horizontal Analysis?, 1. It is useful for long-term analysis. 2. It is useful for long–term planning. 3. It does not examine the periodical trend",
        answerOptions: [
        { answerText: "Both 1 and 2", isCorrect: true },
        { answerText: "Both 1 and 3", isCorrect: false },
        { answerText: "Both 2 and 3", isCorrect: false },
        { answerText: "All of the above", isCorrect: false },
      ],
    },
    {
      questionText: "23)	Trend percentages and trend ratios are used in what analysis type?",
        answerOptions: [
        { answerText: "Vertical Analysis", isCorrect: false },
        { answerText: "Horizontal Analysis", isCorrect: false },
        { answerText: "Static Analysis", isCorrect: true },
        { answerText: "Dynamic Analysis", isCorrect: false },
      ],
    },
    {
      questionText: "24)	Management accounting uses what type of data?",
        answerOptions: [
        { answerText: "Descriptive data ", isCorrect: false },
        { answerText: "Qualitative data", isCorrect: false },
        { answerText: "Quantitative data", isCorrect: false },
        { answerText: "Both Qualitative and Quantitative data", isCorrect: true },
      ],
    },
    {
      questionText: "25)	Which of the following is NOT an internal user of management information?",
        answerOptions: [
        { answerText: "Department Manager", isCorrect: false },
        { answerText: "Controller", isCorrect: false },
        { answerText: "Creditor", isCorrect: true },
        { answerText: "Treasurer", isCorrect: false },
      ],
    },
    {
      questionText: "26)	Deferred revenue expenditures have an impact on the profitability only when they are _______.",
        answerOptions: [
        { answerText: "Shown in the liability side", isCorrect: true },
        { answerText: "Not shown in the balance sheet", isCorrect: false },
        { answerText: "Not written in profitability statement", isCorrect: false },
        { answerText: "Written off to profitability statement", isCorrect: false },
      ],
    },
    {
      questionText: "27)	Which is NOT an advantage of Management accounting?",
        answerOptions: [
        { answerText: "Facilitates communication", isCorrect: false },
        { answerText: "Economic appraisal", isCorrect: false },
        { answerText: "Helps in decision making", isCorrect: false },
        { answerText: "Influenced by personal bias", isCorrect: true },
      ],
    },
    {
      questionText: "28)	In the funds flow statement, funds from operations is",
        answerOptions: [
        { answerText: "Applications of Funds", isCorrect: false },
        { answerText: "Applications of Cash", isCorrect: false },
        { answerText: "Sources of Funds", isCorrect: true },
        { answerText: "Applications of Funds", isCorrect: false },
      ],
    },
    {
      questionText: "29)	An average length of sentence in a paragraph should be _____",
        answerOptions: [
        { answerText: "Competitors", isCorrect: true },
        { answerText: "Size of the firm", isCorrect: false },
        { answerText: "Terms of credit", isCorrect: true },
        { answerText: "Operating Cycle", isCorrect: false },
      ],
    },
    {
      questionText: "30)	Management accounting is suitable for:",
        answerOptions: [
        { answerText: "Non-Profit Organizations", isCorrect: false },
        { answerText: "Small Trading Organizations", isCorrect: false },
        { answerText: "Large Industrial and Trading Organizations", isCorrect: true },
        { answerText: "Co-operative Societies", isCorrect: false },
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
