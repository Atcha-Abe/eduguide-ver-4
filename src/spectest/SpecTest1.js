import React,  { useState }  from "react";
import "./Specialized.css";


import { Link } from "react-router-dom";
export default function SpecTest1() {
	const questions = [
    
    {   
      questionText: '1)	What is a Class in Object-oriented Programming?',
      answerOptions: [
          { answerText: 'Used to describe one or more objects', isCorrect: false },
          { answerText: 'Serves as a template for template for creating, or instantiating, specific objects within a program', isCorrect: false },
          { answerText: 'Both A and B', isCorrect: true },
          { answerText: 'None of the Above', isCorrect: false },
      ],
  },
  {
      questionText: '2)	In Object-oriented Programming, objects are members of _____.',
      answerOptions: [
          { answerText: 'Functions', isCorrect: false },
          { answerText: 'Variables', isCorrect: false },
          { answerText: 'Classes', isCorrect: true },
          { answerText: 'Data', isCorrect: false },
      ],
  },
  {
      questionText: '3)	Any hardware or software which is used to connect two devices by enabling them to communicate is classified as an _____.',
      answerOptions: [
          { answerText: 'Analogue Modem', isCorrect: false },
          { answerText: 'Digital Modem ', isCorrect: false },
          { answerText: 'Analogue Interface', isCorrect: false },
          { answerText: 'Interface', isCorrect: true },
      ],
  },
  {
      questionText: '4)	What does SDLC stand for?',
      answerOptions: [
          { answerText: 'Software Development Line Circuit', isCorrect: false },
          { answerText: 'Systems Development Life Cycle', isCorrect: true },
          { answerText: 'Synchronized Destructor Line Cycle', isCorrect: false },
          { answerText: 'Systems Diffusion Light Counter', isCorrect: false },
      ],
  },
  {
      questionText: '5)	What is an array?',
      answerOptions: [
          { answerText: 'Collection of different type of elements', isCorrect: false },
          { answerText: 'Collection of similar type of elements', isCorrect: true },
          { answerText: 'Both A and B', isCorrect: false },
          { answerText: 'None of the Above', isCorrect: false },
      ],
  },
  {
      questionText: '6)	Who is considered as the Father of Computers?',
      answerOptions: [
          { answerText: 'John Napier', isCorrect: false },
          { answerText: 'Blaise Pascal', isCorrect: false },
          { answerText: 'Charles Babbage', isCorrect: true },
          { answerText: 'Joseph-Marie Jacquard', isCorrect: false },
      ],
  },
  {
      questionText: '7)	What is a framework?',
      answerOptions: [
          { answerText: 'A platform for making software applications.', isCorrect: false },
          { answerText: 'Provides the basis on which developers can build programs for a specific platform', isCorrect: false },
          { answerText: 'Both A and B', isCorrect: true },
          { answerText: 'None of the Above', isCorrect: false },
      ],
  },
  {
      questionText: '8)	A computer uses which type of number system to calculate and to store data?',
      answerOptions: [
          { answerText: 'Decimal', isCorrect: false },
          { answerText: 'Octal', isCorrect: false },
          { answerText: 'Binary ', isCorrect: true },
          { answerText: 'Hexadecimal', isCorrect: false },
      ],
  },
  {
      questionText: '9)	Object-oriented programming is method is followed in:',
      answerOptions: [
          { answerText: 'C++ Programming Language', isCorrect: false },
          { answerText: 'C Programming Language', isCorrect: false },
          { answerText: 'C# Programming Language', isCorrect: false },
          { answerText: 'Both A and C', isCorrect: true },
      ],
  },
  {
      questionText: '10)	What is the primary purpose of inheritance in programming?',
      answerOptions: [
          { answerText: 'Overriding', isCorrect: false },
          { answerText: 'Reusing Code', isCorrect: true },
          { answerText: 'Overloading', isCorrect: false },
          { answerText: 'Deleting Code', isCorrect: false },
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
    
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
                    <Link to="/gencourses"> Mumu </Link>
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
}
