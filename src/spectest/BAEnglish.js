import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default function BAEnglish() {
  const questions = [
    {
      questionText: "1)	What is the study of speech sounds of a given language and their function within the sound system called?",
      answerOptions: [
        { answerText: "Phonology", isCorrect: true },
        { answerText: "Phonetics", isCorrect: false },
        { answerText: "Morphology", isCorrect: false },
        { answerText: "Syntax", isCorrect: false },
      ],
    },
    {
      questionText: "2)	Which of these is used to express habitual actions?",
      answerOptions: [
        { answerText: "Past continuous tense", isCorrect: false },
        { answerText: "Present continuous tense", isCorrect: false },
        { answerText: "Present perfect tense", isCorrect: false },
        { answerText: "Simple present tense", isCorrect: true },
      ],
    },
    {
      questionText: "3)	Which of the following types of linguistics below finds out how a certain set of people use a language at a given time?",
      answerOptions: [
        { answerText: "Historical Linguistics", isCorrect: false },
        { answerText: "Synchronic Linguistics", isCorrect: true },
        { answerText: "Comparative Linguistics", isCorrect: false },
        { answerText: "Diachronic Linguistics", isCorrect: false },
      ],
    },
    {
      questionText: "4)	What is the part of the sentence which denotes the person or thing about which something is said?",
      answerOptions: [
        { answerText: "Subject", isCorrect: true },
        { answerText: "Predicate", isCorrect: false },
        { answerText: "Clause", isCorrect: false },
        { answerText: "Phrase", isCorrect: false },
      ],
    },
    {
      questionText: "5)	Which of these is NOT a type of subordinate clause?",
      answerOptions: [
        { answerText: "Adjective", isCorrect: false },
        { answerText: "Verb", isCorrect: true },
        { answerText: "Adverb", isCorrect: false },
        { answerText: "Noun", isCorrect: false },
      ],
    },
    {
      questionText: "6)	Choose the statement that makes the most sense.",
      answerOptions: [
        { answerText: "Wine is cheap than water", isCorrect: false },
        { answerText: "Wine is more cheap than water", isCorrect: false },
        { answerText: "Wine is cheaper than water", isCorrect: true },
        { answerText: "Wine is cheapest than water", isCorrect: false },
      ],
    },
    {
      questionText: "7)	Which of these is NOT a type of subordinating conjunction?",
      answerOptions: [
        { answerText: "Age", isCorrect: true },
        { answerText: "Time", isCorrect: false },
        { answerText: "Cause", isCorrect: false },
        { answerText: "Result", isCorrect: false },
      ],
    },
    {
      questionText: "8)	Which of the following is used to separate a series of loosely related clauses?",
      answerOptions: [
        { answerText: "Colon", isCorrect: false },
        { answerText: "Semicolon", isCorrect: true },
        { answerText: "Comma", isCorrect: false },
        { answerText: "Full Stop", isCorrect: false },
      ],
    },
    {
      questionText: "9)	Which of the following is used to convey proportions?",
      answerOptions: [
        { answerText: "Colon", isCorrect: true },
        { answerText: "Semicolon", isCorrect: false },
        { answerText: "Hyphen", isCorrect: false },
        { answerText: "Comma", isCorrect: false },
      ],
    },
    {
      questionText: "10)	Fill the blank with the word that best fits the sentence. “I _______ down in my bed for an hour every afternoon.”",
        answerOptions: [
        { answerText: "laid", isCorrect: false },
        { answerText: "lie", isCorrect: true },
        { answerText: "layed", isCorrect: false },
        { answerText: "lied", isCorrect: false },
      ],
    },
    {
      questionText: "11)	True or False: If two singular nouns refer to the same person or thing, the verb must be singular.",
        answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "12)	Which of these words is not an example of subordinating conjunction related to time?",
        answerOptions: [
        { answerText: "Since", isCorrect: false },
        { answerText: "Before", isCorrect: false },
        { answerText: "Till", isCorrect: false },
        { answerText: "Because", isCorrect: true },
      ],
    },
    {
      questionText: "13)	Which of these is NOT a type of sentence?",
        answerOptions: [
        { answerText: "Interrogative", isCorrect: false },
        { answerText: "Imperative", isCorrect: false },
        { answerText: "Complicated", isCorrect: true },
        { answerText: "Declarative", isCorrect: false },
      ],
    },
    {
      questionText: "14)   Which of these is the most common type of grapevine?",
        answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "15)	Fill in the blank that best fits the sentence. “The ship ___ set sail.”",
        answerOptions: [
        { answerText: "is", isCorrect: false },
        { answerText: "has", isCorrect: true },
        { answerText: "was", isCorrect: false },
        { answerText: "have", isCorrect: false },
      ],
    },
    {
      questionText: "16)	Convert the following active form to passive form: “I was determined to mortgage the car.”",
        answerOptions: [
        { answerText: "I was determined that the car should be mortgaged.", isCorrect: true },
        { answerText: "I was determined that car will be mortgaged.", isCorrect: false },
        { answerText: "The car was determined to be mortgaged.", isCorrect: false },
        { answerText: "I am determined that car will be mortgaged.", isCorrect: false },
      ],
    },
    {
      questionText: "17)  Which of these is NOT a use of the passive voice?",
        answerOptions: [
        { answerText: "When an active form would create problems for the speaker", isCorrect: false },
        { answerText: "When we know about the doer of the action", isCorrect: true },
        { answerText: "When the subject of the active verb would be people.", isCorrect: false },
        { answerText: "To avoid awkward or ungrammatical sentences.", isCorrect: false },
      ],
    },
    {
      questionText: "18)	Which of these is NOT modified by an adverb?",
        answerOptions: [
        { answerText: "Verb", isCorrect: false },
        { answerText: "Adverb", isCorrect: false },
        { answerText: "Adjective", isCorrect: false },
        { answerText: "Noun", isCorrect: true },
      ],
    },
    {
      questionText:"19)	Coordinating clauses are clauses of ______ rank.",
        answerOptions: [
        { answerText: "equal", isCorrect: true },
        { answerText: "unequal", isCorrect: false },
        { answerText: "varied", isCorrect: false },
        { answerText: "different", isCorrect: false },
      ],
    },
    {
      questionText: "20)	Which of these should be kept in mind while giving instructions?Which of these months does not have an abbreviation?",
        answerOptions: [
        { answerText: "February", isCorrect: false },
        { answerText: "December", isCorrect: false },
        { answerText: "October", isCorrect: false },
        { answerText: "May", isCorrect: true },
      ],
    },
    {
      questionText: "21)	True or False: Suffixes “er” and “est” are added to monosyllabic adjectives to express contrasts.",
        answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "22)	Fill the blank with the word that best fits the sentence below “His dream and objective ___ to pass his college entrance examination.”",
        answerOptions: [
        { answerText: "is", isCorrect: true },
        { answerText: "are", isCorrect: false },
        { answerText: "am", isCorrect: false },
        { answerText: "were", isCorrect: false },
      ],
    },
    {
      questionText: "23)	Correct the statement below: “Milk and cereal are my favorite breakfast.”",
        answerOptions: [
        { answerText: "Milk and cereals are my favorite breakfast.", isCorrect: false },
        { answerText: "Milks and cereals are my favorite breakfast", isCorrect: false },
        { answerText: "Milks and cereal are my favorite breakfast", isCorrect: false },
        { answerText: "Milk and cereal is my favorite breakfast", isCorrect: true },
      ],
    },
    {
      questionText: "24)	Which of the following below is NOT an important feature of a paragraph?",
        answerOptions: [
        { answerText: "Unity", isCorrect: false },
        { answerText: "Coherence", isCorrect: false },
        { answerText: "Breadth", isCorrect: true },
        { answerText: "Length", isCorrect: false },
      ],
    },
    {
      questionText: "25)	Fill the blank with the word that best fits the sentence. “He is the _____ man for the job.”",
        answerOptions: [
        { answerText: "most perfect", isCorrect: false },
        { answerText: "absolutely perfect", isCorrect: false },
        { answerText: "perfect", isCorrect: true },
        { answerText: "really perfect", isCorrect: false },
      ],
    },
    {
      questionText: "26)	Which of the words below means to influence?",
        answerOptions: [
        { answerText: "Affect", isCorrect: true },
        { answerText: "Effect", isCorrect: false },
        { answerText: "Affecct", isCorrect: false },
        { answerText: "Efect", isCorrect: false },
      ],
    },
    {
      questionText: "27)	Which of the words below is considered an adjective?",
        answerOptions: [
        { answerText: "Course", isCorrect: false },
        { answerText: "Coarse", isCorrect: true },
        { answerText: "Caorse", isCorrect: false },
        { answerText: "Coaurse", isCorrect: false },
      ],
    },
    {
      questionText: "28)	Which of the following below is the suffix, ¬-ly NOT added?",
        answerOptions: [
        { answerText: "First", isCorrect: true },
        { answerText: "Second", isCorrect: false },
        { answerText: "Third", isCorrect: false },
        { answerText: "Final", isCorrect: false },
      ],
    },
    {
      questionText: "29)	An average length of sentence in a paragraph should be _____",
        answerOptions: [
        { answerText: "2 to 5 words", isCorrect: false },
        { answerText: "5 to 10 words", isCorrect: false },
        { answerText: "15 to 20 words", isCorrect: true },
        { answerText: "25 to 30 words", isCorrect: false },
      ],
    },
    {
      questionText: "30)	Where should the main idea be put up in a paragraph?",
        answerOptions: [
        { answerText: "After the paragraph", isCorrect: false },
        { answerText: "In the beginning", isCorrect: true },
        { answerText: "In the middle", isCorrect: false },
        { answerText: "At the end", isCorrect: false },
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
