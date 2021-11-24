import React, { useState } from "react";
import "./General.css";
import { Link } from "react-router-dom";

export default function GenTest() {
<<<<<<< HEAD
	const questions = [
    
	{
		questionText: 'On a scale of 1-5 where 5 is the highest, how interested are you in computers?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '4', isCorrect: false },
			{ answerText: '5', isCorrect: false },
		],
	},
	{
		questionText: 'On a scale of 1-5 where 5 is the highest, how interested are you in teaching?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '4', isCorrect: false },
			{ answerText: '5', isCorrect: false },
		]
	},
	{
		questionText: 'On a scale of 1-5 where 5 is the highest, how interested are you in health care practices?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '4', isCorrect: false },
			{ answerText: '5', isCorrect: false },
		],
	},
	{
		questionText: 'On a scale of 1-5 where 5 is the highest, how interested are you in wound care?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '4', isCorrect: false },
			{ answerText: '5', isCorrect: false },
		],
	},
	{
		questionText: 'On a scale of 1-5 where 5 is the highest, how interested are you in emergency care?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '4', isCorrect: false },
			{ answerText: '5', isCorrect: false },
		],
	},
	{
		questionText: 'On a scale of 1-5 where 5 is the highest, how interested are you in analyzing business environment for strategic direction?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '4', isCorrect: false },
			{ answerText: '5', isCorrect: false },
		],
	},
	{
		questionText: 'On a scale of 1-5 where 5 is the highest, how interested are you in conduction business research?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '4', isCorrect: false },
			{ answerText: '5', isCorrect: false },
		],
	},
	{
		questionText: 'On a scale of 1-5 where 5 is the highest, how interested are you in endorsing products, goods and services?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '4', isCorrect: false },
			{ answerText: '5', isCorrect: false },
		],
	},
	{
		questionText: 'On a scale of 1-5 where 5 is the highest, how interested are you in the work flow of products, goods and services?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '4', isCorrect: false },
			{ answerText: '5', isCorrect: false },
		],
	},
	   {
		questionText: 'On a scale of 1-5 where 5 is the highest, how interested are you in starting up a business?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '4', isCorrect: false },
			{ answerText: '5', isCorrect: false },
		],
	},


];

	questions.sort(() => Math.random() - 0.5)
=======
  const questions = [
    {
      questionText:
        "On a scale of 1-5 where 5 is the highest, how interested are you in computers?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText:
        "On a scale of 1-5 where 5 is the highest, how interested are you in teaching?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText:
        "On a scale of 1-5 where 5 is the highest, how interested are you in health care practices?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText:
        "On a scale of 1-5 where 5 is the highest, how interested are you in wound care?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText:
        "On a scale of 1-5 where 5 is the highest, how interested are you in emergency care?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText:
        "On a scale of 1-5 where 5 is the highest, how interested are you in analyzing business environment for strategic direction?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText:
        "On a scale of 1-5 where 5 is the highest, how interested are you in conduction business research?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText:
        "On a scale of 1-5 where 5 is the highest, how interested are you in endorsing products, goods and services?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText:
        "On a scale of 1-5 where 5 is the highest, how interested are you in the work flow of products, goods and services?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText:
        "On a scale of 1-5 where 5 is the highest, how interested are you in starting up a business?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: false },
      ],
    },
  ];
>>>>>>> e71a5ea4a593e7c42ec9ddf0cef85d8d5c080cac

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

<<<<<<< HEAD
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
=======
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
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>
                Question {currentQuestion + 1} /{questions.length}{" "}
              </span>
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
            <br></br>
            <br></br>
            <br></br>
          </div>
          <Link to="/gencourses" className="reg-btn" value="Back">
            Next
          </Link>
        </>
      )}
    </div>
  );
>>>>>>> e71a5ea4a593e7c42ec9ddf0cef85d8d5c080cac
}
