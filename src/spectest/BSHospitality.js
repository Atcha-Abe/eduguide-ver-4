import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default function BSHospitality() {
  const questions = [
    {
      questionText: "1)	Food or beverages served in guest room is known a:",
      answerOptions: [
        { answerText: "Cleaning Service", isCorrect: false },
        { answerText: "Room Service", isCorrect: true },
        { answerText: "Full Service", isCorrect: false },
        { answerText: "Service Station", isCorrect: false },
      ],
    },
    {
      questionText: "2)	What do you call a hotel that is situated near an airport?",
      answerOptions: [
        { answerText: "Motel", isCorrect: false },
        { answerText: "Airtel", isCorrect: true },
        { answerText: "Rotel", isCorrect: false },
        { answerText: "Floatel", isCorrect: false },
      ],
    },
    {
      questionText: "3)	What does a poissonnier chef specialize in?",
      answerOptions: [
        { answerText: "Vegetables", isCorrect: false },
        { answerText: "Garnishes", isCorrect: false },
        { answerText: "Fish", isCorrect: true },
        { answerText: "Chicken", isCorrect: false },
      ],
    },
    {
      questionText: "4)	Which section in a kitchen supplies tea or coffee?",
      answerOptions: [
        { answerText: "Confectionary", isCorrect: false },
        { answerText: "Hot Range", isCorrect: true },
        { answerText: "Still Room", isCorrect: false },
        { answerText: "Cold Room", isCorrect: false },
      ],
    },
    {
      questionText: "5)	A duplex room is a room with ________.",
      answerOptions: [
        { answerText: "An extra bed", isCorrect: false },
        { answerText: "Room service facility", isCorrect: false },
        { answerText: "An air conditioner", isCorrect: false },
        { answerText: "Two stories connected by stairs", isCorrect: true },
      ],
    },
    {
      questionText: "6)	Which of the following hotel employees are responsible for balancing the guest accounts every day?",
      answerOptions: [
        { answerText: "General Manager", isCorrect: false },
        { answerText: "Accountant", isCorrect: false },
        { answerText: "Front Desk Clerk", isCorrect: false },
        { answerText: "Night Auditor", isCorrect: true },
      ],
    },
    {
      questionText: "7)	Front Desk Clerk",
      answerOptions: [
        { answerText: "Accounting", isCorrect: false },
        { answerText: "Front Office", isCorrect: true },
        { answerText: "Security", isCorrect: false },
        { answerText: "Human Resources", isCorrect: false },
      ],
    },
    {
      questionText: "8)	What do guests consider the number one concern when staying at a hotel?",
      answerOptions: [
        { answerText: "Room is ready and available for checking in", isCorrect: false },
        { answerText: "Late-night room service", isCorrect: false },
        { answerText: "It must be close to a department store", isCorrect: false },
        { answerText: "Cleanliness and Security", isCorrect: true },
      ],
    },
    {
      questionText: "9)	The ___________ is used as the benchmark quotation of a hotel’s room rate.",
      answerOptions: [
        { answerText: "Rack Rate", isCorrect: true },
        { answerText: "Restricted Rate", isCorrect: false },
        { answerText: "Discount Rate", isCorrect: false },
        { answerText: "Corporate Rate", isCorrect: false },
      ],
    },
    {
      questionText: "10)	Which of the following has the most significant cost in kitchen operations?",
        answerOptions: [
        { answerText: "Labor", isCorrect: true },
        { answerText: "Utilities", isCorrect: false },
        { answerText: "Uniforms", isCorrect: false },
        { answerText: "Maintenance", isCorrect: false },
      ],
    },
    {
      questionText: "11)	Who is the person generally in charge of the hotel kitchen?",
        answerOptions: [
        { answerText: "Sous Chef", isCorrect: false },
        { answerText: "Executive Chef", isCorrect: true },
        { answerText: "Chef Tournant ", isCorrect: false },
        { answerText: "Garde Manger", isCorrect: false },
      ],
    },
    {
      questionText: "12)	What is a Mocktail?",
        answerOptions: [
        { answerText: "It is a drink that combines fruit juices and sodas without any alcohol mixed in.", isCorrect: true },
        { answerText: "It is lemon juice with ice", isCorrect: false },
        { answerText: "It is liquor mixed with fruit juices", isCorrect: false },
        { answerText: "It is a type of draught beer", isCorrect: false },
      ],
    },
    {
      questionText: "13)	What is a motel?",
        answerOptions: [
        { answerText: "A hotel with a restaurant", isCorrect: false },
        { answerText: "A large hotel with packing facilities", isCorrect: false },
        { answerText: "A small hotel found near airports", isCorrect: false },
        { answerText: "A small hotel on the highway where motorists check in", isCorrect: true },
      ],
    },
    {
      questionText: "14)	Why are electric kettles provided in four star and five-star hotels?",
        answerOptions: [
        { answerText: "So that they could make tea or coffee on their own", isCorrect: true },
        { answerText: "So they could drink hot water", isCorrect: false },
        { answerText: "So they could use the water for cleaning", isCorrect: false },
        { answerText: "So that they could use the water for washing clothes", isCorrect: false },
      ],
    },
    {
      questionText: "15)	The Rooms Division is responsible for which of the following?",
        answerOptions: [
        { answerText: "Housekeeping", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
        { answerText: "Reservations", isCorrect: false },
        { answerText: "Security", isCorrect: false },
      ],
    },
    {
      questionText: "16)	The ___________ allows hotels and their corporate office to access rooms inventory and make reservations simultaneously.",
        answerOptions: [
        { answerText: "Security Guard", isCorrect: false },
        { answerText: "Front-Desk Clerk", isCorrect: false },
        { answerText: "Central Reservations System", isCorrect: true },
        { answerText: "Concierge", isCorrect: false },
      ],
    },
    {
      questionText: "17)	A hotel restaurant forecasts its expected guest counts based on house count and type of guest. This is called:",
        answerOptions: [
        { answerText: "Service Expectations", isCorrect: false },
        { answerText: "The Capture Rate", isCorrect: true },
        { answerText: "Rate of Return", isCorrect: false },
        { answerText: "Guest Forecast", isCorrect: false },
      ],
    },
    {
      questionText: "18)	The chef steward is responsible for which of the following functions?",
        answerOptions: [
        { answerText: "Sanitation", isCorrect: false },
        { answerText: "Maintenance of Dishwashing Machines", isCorrect: false },
        { answerText: "Pest Control", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
      ],
    },
    {
      questionText:"19)	Where is the place in a hotel where alcoholic beverages and snacks are served?",
        answerOptions: [
        { answerText: "Bar", isCorrect: true },
        { answerText: "Lobby", isCorrect: false },
        { answerText: "Coffee Shop", isCorrect: false },
        { answerText: "Banquet", isCorrect: false },
      ],
    },
    {
      questionText: "20)	A hotel room with all guest rooms occupied is called:",
        answerOptions: [
        { answerText: "Full House", isCorrect: false },
        { answerText: "Houseful", isCorrect: true },
        { answerText: "Greenhouse", isCorrect: false },
        { answerText: "Full Stack", isCorrect: false },
      ],
    },
    {
      questionText: "21)	What is the name of the underlines cloth used on a restaurant table?",
        answerOptions: [
        { answerText: "Baize Cloth", isCorrect: true },
        { answerText: "Demask", isCorrect: false },
        { answerText: "Serviette", isCorrect: false },
        { answerText: "Slip Cloth", isCorrect: false },
      ],
    },
    {
      questionText: "22)	If a golf course, house riding track and casino have been provided within the premises of a hotel then it is considered as a:",
        answerOptions: [
        { answerText: "Resort Hotel", isCorrect: true },
        { answerText: "Ski Resort Hotel", isCorrect: false },
        { answerText: "Heritage Hotel", isCorrect: false },
        { answerText: "Motel", isCorrect: false },
      ],
    },
    {
      questionText: "23)	The person who is responsible for recommending alcoholic beverages and supervising wine service in a restaurant is called a:",
        answerOptions: [
        { answerText: "Trancheur", isCorrect: false },
        { answerText: "Debarrasseur", isCorrect: false },
        { answerText: "Commis de Rang", isCorrect: false },
        { answerText: "Sommelier", isCorrect: true },
      ],
    },
    {
      questionText: "24)	What do you call a hotel on wheels?",
        answerOptions: [
        { answerText: "Floatel", isCorrect: false },
        { answerText: "Airtel", isCorrect: false },
        { answerText: "Motel", isCorrect: false },
        { answerText: "Rotel", isCorrect: true },
      ],
    },
    {
      questionText: "25)	What is the main use of a waiter’s cloth?",
        answerOptions: [
        { answerText: "polishing plates and glasses when laying them on the table", isCorrect: true },
        { answerText: "wiping spilt food from the carpet", isCorrect: false },
        { answerText: "wiping a customer’s fingers after eating a meal", isCorrect: false },
        { answerText: "covering stains on the tablecloth", isCorrect: false },
      ],
    },
    {
      questionText: "26)	The person who cleans the kitchen is known as the:",
        answerOptions: [
        { answerText: "Utility Worker", isCorrect: false },
        { answerText: "Kitchen Steward", isCorrect: true },
        { answerText: "Pot Washer", isCorrect: false },
        { answerText: "Dish Washer", isCorrect: false },
      ],
    },
    {
      questionText: "27)	Which of these is NOT one of the three things that are the most important when purchasing linens for your hotel?",
        answerOptions: [
        { answerText: "Laundry Cost", isCorrect: false },
        { answerText: "Purchase Price", isCorrect: false },
        { answerText: "Durability", isCorrect: false },
        { answerText: "Branding", isCorrect: true },
      ],
    },
    {
      questionText: "28)	Which of the following is usually NOT part of the job description for a Front Desk Attendant?",
        answerOptions: [
        { answerText: "Providing information to guests", isCorrect: false },
        { answerText: "Checking rooms for cleanliness", isCorrect: true },
        { answerText: "Checking guests into their rooms", isCorrect: false },
        { answerText: "Processing the payments of guests", isCorrect: false },
      ],
    },
    {
      questionText: "29)	Which of the following statements about synthetic fabrics is false?",
        answerOptions: [
        { answerText: "They are softer than natural fabrics", isCorrect: true },
        { answerText: "They are not as absorbent as natural fabrics", isCorrect: false },
        { answerText: "They can be used directly from the dryer without ironing", isCorrect: false },
        { answerText: "They retain color better than natural fabrics", isCorrect: false },
      ],
    },
    {
      questionText: "30)	Which of the following is a position in the Food and Beverage department?",
        answerOptions: [
        { answerText: "Maintenance Supervisor", isCorrect: false },
        { answerText: "Line Cook", isCorrect: true },
        { answerText: "Concierge", isCorrect: false },
        { answerText: "Front Desk Attendant", isCorrect: false },
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
