import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default function BSCompSci() {
  const questions = [
    {
      questionText: "1)	What is a Class in Object-oriented Programming?",
      answerOptions: [
        {
          answerText: "Used to describe one or more objects",
          isCorrect: false,
        },
        {
          answerText:
            "Serves as a template for template for creating, or instantiating, specific objects within a program",
          isCorrect: false,
        },
        { answerText: "Both A and B", isCorrect: true },
        { answerText: "None of the Above", isCorrect: false },
      ],
    },
    {
      questionText:
        "2)	In Object-oriented Programming, objects are members of _____.",
      answerOptions: [
        { answerText: "Functions", isCorrect: false },
        { answerText: "Variables", isCorrect: false },
        { answerText: "Classes", isCorrect: true },
        { answerText: "Data", isCorrect: false },
      ],
    },
    {
      questionText:
        "3)	Any hardware or software which is used to connect two devices by enabling them to communicate is classified as an _____.",
      answerOptions: [
        { answerText: "Analogue Modem", isCorrect: false },
        { answerText: "Digital Modem ", isCorrect: false },
        { answerText: "Analogue Interface", isCorrect: false },
        { answerText: "Interface", isCorrect: true },
      ],
    },
    {
      questionText: "4)	What does SDLC stand for?",
      answerOptions: [
        { answerText: "Software Development Line Circuit", isCorrect: false },
        { answerText: "Systems Development Life Cycle", isCorrect: true },
        { answerText: "Synchronized Destructor Line Cycle", isCorrect: false },
        { answerText: "Systems Diffusion Light Counter", isCorrect: false },
      ],
    },
    {
      questionText: "5)	What is an array?",
      answerOptions: [
        {
          answerText: "Collection of different type of elements",
          isCorrect: false,
        },
        {
          answerText: "Collection of similar type of elements",
          isCorrect: true,
        },
        { answerText: "Both A and B", isCorrect: false },
        { answerText: "None of the Above", isCorrect: false },
      ],
    },
    {
      questionText: "6)	Who is considered as the Father of Computers?",
      answerOptions: [
        { answerText: "John Napier", isCorrect: false },
        { answerText: "Blaise Pascal", isCorrect: false },
        { answerText: "Charles Babbage", isCorrect: true },
        { answerText: "Joseph-Marie Jacquard", isCorrect: false },
      ],
    },
    {
      questionText: "7)	What is a framework?",
      answerOptions: [
        {
          answerText: "A platform for making software applications.",
          isCorrect: false,
        },
        {
          answerText:
            "Provides the basis on which developers can build programs for a specific platform",
          isCorrect: false,
        },
        { answerText: "Both A and B", isCorrect: true },
        { answerText: "None of the Above", isCorrect: false },
      ],
    },
    {
      questionText:
        "8)	A computer uses which type of number system to calculate and to store data?",
      answerOptions: [
        { answerText: "Decimal", isCorrect: false },
        { answerText: "Octal", isCorrect: false },
        { answerText: "Binary ", isCorrect: true },
        { answerText: "Hexadecimal", isCorrect: false },
      ],
    },
    {
      questionText: "9)	Object-oriented programming is method is followed in:",
      answerOptions: [
        { answerText: "C++ Programming Language", isCorrect: false },
        { answerText: "C Programming Language", isCorrect: false },
        { answerText: "C# Programming Language", isCorrect: false },
        { answerText: "Both A and C", isCorrect: true },
      ],
    },
    {
      questionText:
        "10)	What is the primary purpose of inheritance in programming?",
        answerOptions: [
        { answerText: "Overriding", isCorrect: false },
        { answerText: "Reusing Code", isCorrect: true },
        { answerText: "Overloading", isCorrect: false },
        { answerText: "Deleting Code", isCorrect: false },
      ],
    },
    {
      questionText:
        "11)	A compiler is a ____.",
        answerOptions: [
        { answerText: "Combination of computer hardware and software", isCorrect: false },
        { answerText: "A software utility that translates a program written in high language into machine level language", isCorrect: true },
        { answerText: "A software utility that translates a program written in machine language into high level language", isCorrect: false },
        { answerText: "Combination of computer hardware", isCorrect: false },
      ],
    },
    {
      questionText:
        "12)	When java source is compiled, a file named after the class is:",
        answerOptions: [
        { answerText: ".java extension", isCorrect: false },
        { answerText: ".javac extension", isCorrect: false },
        { answerText: ".class extension", isCorrect: true },
        { answerText: ".jclass extension", isCorrect: false },
      ],
    },
    {
      questionText:
        "13)	What is the size of the long data type in java?",
        answerOptions: [
        { answerText: "2 bytes", isCorrect: false },
        { answerText: "4 bytes", isCorrect: false },
        { answerText: "6 bytes", isCorrect: false },
        { answerText: "8 bytes", isCorrect: true },
      ],
    },
    {
      questionText:
        "14)	The “href” attribute in HTML document is used to define what?",
        answerOptions: [
        { answerText: "Link Destination", isCorrect: true },
        { answerText: "Paragraph", isCorrect: false },
        { answerText: "Table", isCorrect: false },
        { answerText: "Heading", isCorrect: false },
      ],
    },
    {
      questionText:
        "15)	Electronic Digital Circuits are also known as:",
        answerOptions: [
        { answerText: "Binary Circuits", isCorrect: false },
        { answerText: "Logic Circuits", isCorrect: true },
        { answerText: "Switching Algebra", isCorrect: false },
        { answerText: "Binary Algebra", isCorrect: false },
      ],
    },
    {
      questionText:
        "16)	The ASCII uses how many bits for each character?",
        answerOptions: [
        { answerText: "8 bit code", isCorrect: false },
        { answerText: "7 bit code", isCorrect: true },
        { answerText: "6 bit code", isCorrect: false },
        { answerText: "4 bit code", isCorrect: false },
      ],
    },
    {
      questionText:
        "17)	Logic gates have values in ",
        answerOptions: [
        { answerText: "Binary numbers", isCorrect: true },
        { answerText: "Decimal numbers", isCorrect: false },
        { answerText: "Octal numbers", isCorrect: false },
        { answerText: "Hexadecimal numbers", isCorrect: false },
      ],
    },
    {
      questionText:
        "18)	For applying styles on many web pages which sheet style is more preferable?",
        answerOptions: [
        { answerText: "External CSS", isCorrect: false },
        { answerText: "Internal CSS", isCorrect: true },
        { answerText: "Inline CSS", isCorrect: false },
        { answerText: "None", isCorrect: false },
      ],
    },
    {
      questionText:
        "19)	In HTML links an unvisited link is underlined and colored what?",
        answerOptions: [
        { answerText: "Blue Colored", isCorrect: true },
        { answerText: "Red Colored ", isCorrect: false },
        { answerText: "Black Colored", isCorrect: false },
        { answerText: "Purple Colored", isCorrect: false },
      ],
    },
    {
      questionText:
        "20)	The HTML <br> element defines",
        answerOptions: [
        { answerText: "Preformatted text", isCorrect: false },
        { answerText: "Line Break", isCorrect: true },
        { answerText: "Paragraph", isCorrect: false },
        { answerText: "Both A and C", isCorrect: false },
      ],
    },
    {
      questionText:
        "21)	In HTML, the <p> tag defines a:",
        answerOptions: [
        { answerText: "Link", isCorrect: false },
        { answerText: "Parenthesis", isCorrect: false },
        { answerText: "Line", isCorrect: false },
        { answerText: "Paragraph", isCorrect: true },
      ],
    },
    {
      questionText:
        "22)	Which style of CSS sheets are more preferable for applying a unique style in single web element?",
        answerOptions: [
        { answerText: "Internal CSS", isCorrect: false },
        { answerText: "Inline CSS", isCorrect: true },
        { answerText: "External CSS", isCorrect: false },
        { answerText: "Outline CSS", isCorrect: false },
      ],
    },
    {
      questionText:
        "23)	Which of the following best describes sorting?",
        answerOptions: [
        { answerText: "Finding the location of the record with a given key", isCorrect: false },
        { answerText: "Adding a new record to the data structure", isCorrect: false },
        { answerText: "Arranging the data in some given order", isCorrect: true },
        { answerText: "Accessing and processing each record exactly once", isCorrect: false },
      ],
    },
    {
      questionText:
        "24)  A mathematical model with a collection of operations defined on that model is called:",
        answerOptions: [
        { answerText: "Abstract Data Type", isCorrect: true },
        { answerText: "Algorithm", isCorrect: false },
        { answerText: "Primitive Data Type", isCorrect: false },
        { answerText: "Data StructureNone", isCorrect: false },
      ],
    },
    {
      questionText:
        "25)	A ________ search begins the search with the element that is located in the middle",
        answerOptions: [
        { answerText: "Serial", isCorrect: false },
        { answerText: "Parallel", isCorrect: false },
        { answerText: "Random", isCorrect: false },
        { answerText: "Binary", isCorrect: true },
      ],
    },
    {
      questionText:
        "26)	Which of the following sorting methods sorts a given set of items that is already in sorted order or in reverse sorted order with equal speed?",
        answerOptions: [
        { answerText: "Selection sort", isCorrect: false },
        { answerText: "Insertion sort", isCorrect: false },
        { answerText: "Quick sort", isCorrect: true },
        { answerText: "Heap sort", isCorrect: false },
      ],
    },
    {
      questionText:
        "27)	A sort which iteratively passes through a list to exchange the first element with any element less than it and then repeats with a new first element is called",
        answerOptions: [
        { answerText: "Selection sort", isCorrect: true },
        { answerText: "Insertion sort", isCorrect: false },
        { answerText: "Quick sort", isCorrect: false },
        { answerText: "Heap sort", isCorrect: false },
      ],
    },
    {
      questionText:
        "28)	Traversing a binary tree first root and then left and right subtrees called _______ traversal.",
        answerOptions: [
        { answerText: "Preorder", isCorrect: true },
        { answerText: "Inorder", isCorrect: false },
        { answerText: "Postorder", isCorrect: false },
        { answerText: "Underorder", isCorrect: false },
      ],
    },
    {
      questionText:
        "29)	If each node in a tree has values greater in its left subtree and has value less than every value in its right subtree, the tree is called a __________.",
        answerOptions: [
        { answerText: "Complete TreePreorder", isCorrect: false },
        { answerText: "AVL Tree", isCorrect: false },
        { answerText: "Full Binary Tree", isCorrect: false },
        { answerText: "Binary Search Tree", isCorrect: true },
      ],
    },
    {
      questionText:
        "30)	The function and var are known as:",
        answerOptions: [
        { answerText: "Declaration statements", isCorrect: true },
        { answerText: "Keywords", isCorrect: false },
        { answerText: "Prototypes", isCorrect: false },
        { answerText: "Data types", isCorrect: false },
      ],
    },
  ];


  questions.sort(() => Math.random() - 0.5);
  
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
          <div>
            <br></br>
            <Link to="/specdesc" className="reg-btn">
              Reset
            </Link>
            <Link to="/spectest" className="reg-btn">
              Back
            </Link>
            <Link to="/spectest" className="reg-btn">
              Next
            </Link>
          </div>
          <p className="bottom_p">
            <b>Make the right decision.</b>
          </p>
        </>
      )}
    </div>
  );
}
