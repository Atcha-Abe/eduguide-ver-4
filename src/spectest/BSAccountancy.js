import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
import { triggerAsyncId } from "async_hooks";
export default function BAJournalism() {
  const questions = [
    {
      questionText: "1)	The Propaganda model of media control was introduced by Edward S. Herman & __________.",
      answerOptions: [
        { answerText: "Walter Lippmann", isCorrect: false },
        { answerText: "Noam Chomsky", isCorrect: true },
        { answerText: "Harold Laswell", isCorrect: false },
        { answerText: "John Dewey", isCorrect: false },
      ],
    },
    {
      questionText: "2)	A propaganda model focuses on the inequality of ___________________, and its multilevel effects on mass-media.",
      answerOptions: [
        { answerText: "Mass appeal and social quo", isCorrect: false },
        { answerText: "Wealth and power", isCorrect: true },
        { answerText: "Political influence and wealth", isCorrect: false },
        { answerText: "Resources and manpower", isCorrect: false },
      ],
    },
    {
      questionText: "3)	For effective communication, which of these commandments should one NOT follow?3)	Shooting scenes and interviews with two cameras is known as:",
      answerOptions: [
        { answerText: "Cross Shoot", isCorrect: true },
        { answerText: "Double Shoot", isCorrect: false },
        { answerText: "Combine Shoot", isCorrect: false },
        { answerText: "Clinical Shoot", isCorrect: false },
      ],
    },
    {
      questionText: "4)	What is the journalistic criteria that determines the news when well-known people and places are involved?",
      answerOptions: [
        { answerText: "Permanence", isCorrect: false },
        { answerText: "Significance", isCorrect: false },
        { answerText: "Prominence", isCorrect: true },
        { answerText: "Prudence", isCorrect: false },
      ],
    },
    {
      questionText: "5)	It contains the less important information which is often omitted by the newspaper editor if there is not enough space left in the newspaper.",
      answerOptions: [
        { answerText: "Head", isCorrect: false },
        { answerText: "Lead", isCorrect: false },
        { answerText: "Tail", isCorrect: true },
        { answerText: "Body", isCorrect: false },
      ],
    },
    {
      questionText: "6)	The second paragraph of an inverted-pyramid story should:",
      answerOptions: [
        { answerText: "provide background information", isCorrect: false },
        { answerText: "name people, without further clarification, who are referred to in the lead", isCorrect: false },
        { answerText: "start an entirely new topic", isCorrect: false },
        { answerText: "continue with the most newsworthy point, adding details and color", isCorrect: true },
      ],
    },
    {
      questionText: "7)	The process in which the reporter goes back over old stories to find ideas for follow-ups and updates is called as _______.",
      answerOptions: [
        { answerText: "Anniversary Follow Ups", isCorrect: true },
        { answerText: "Breaking News", isCorrect: false },
        { answerText: "Follow Ups", isCorrect: false },
        { answerText: "Old Stories", isCorrect: false },
      ],
    },
    {
      questionText: "8)	Which of the following segments below is NOT considered a beat?",
      answerOptions: [
        { answerText: "Environment", isCorrect: false },
        { answerText: "Robbery", isCorrect: true },
        { answerText: "Sports", isCorrect: false },
        { answerText: "Law", isCorrect: false },
      ],
    },
    {
      questionText: "9)	What is the aim behind having a reporter for every beat?",
      answerOptions: [
        { answerText: "Reporter has knowledge of that particular beat only", isCorrect: false },
        { answerText: "A reporter cannot report other beats", isCorrect: false },
        { answerText: "The reader gets in-depth information about that segment", isCorrect: true },
        { answerText: "Newspaper budget is high", isCorrect: false },
      ],
    },
    {
      questionText: "10)	In journalism, a “mojo” is a:",
        answerOptions: [
        { answerText: "Source that has the ability to bounce back from adversity.", isCorrect: false },
        { answerText: "Source that has the ability to bounce back from adversity.", isCorrect: false },
        { answerText: "Journalist who carries her tools—computers, cameras, recorders—with her at all times.", isCorrect: true },
        { answerText: "Source that provides a journalist with a good-luck charm.", isCorrect: false },
      ],
    },
    {
      questionText: "11)	One way of organizing questions for an interview is called the funnel, which arranges questions in what order?",
        answerOptions: [
        { answerText: "From the most specific to the most general", isCorrect: false },
        { answerText: "From the most general to the most specific", isCorrect: true },
        { answerText: "From the most personal to the most impersonal.", isCorrect: false },
        { answerText: "From the most impersonal to the most personal.", isCorrect: false },
      ],
    },
    {
      questionText: "12)	What does yellow journalism consist of?",
        answerOptions: [
        { answerText: "clickbait headline", isCorrect: true },
        { answerText: "facts", isCorrect: false },
        { answerText: "first-hand accounts", isCorrect: false },
        { answerText: "statistics", isCorrect: false },
      ],
    },
    {
      questionText: "13)	What are the principles of media ethics?",
        answerOptions: [
        { answerText: "indebtedness to political interest", isCorrect: false },
        { answerText: "independence from private and political interests", isCorrect: true },
        { answerText: "independence from political interests", isCorrect: false },
        { answerText: "benefit from political interests", isCorrect: false },
      ],
    },
    {
      questionText: "14)	Which of the following explains how people use the media for their own need?",
        answerOptions: [
        { answerText: "Uses & Gratification Theory", isCorrect: true },
        { answerText: "Propaganda Theory", isCorrect: false },
        { answerText: "Persuasive Theory", isCorrect: false },
        { answerText: "Public Opinion Model", isCorrect: false },
      ],
    },
    {
      questionText: "15)  Which of the following should be avoided by a reporter while covering a natural disaster?",
        answerOptions: [
        { answerText: "Focus on accuracy", isCorrect: false },
        { answerText: "Information from official sources", isCorrect: false },
        { answerText: "Eyewitness accounts", isCorrect: false },
        { answerText: "Sensationalized Coverage", isCorrect: true },
      ],
    },
    {
      questionText: "16)	A news report should ideally contain answers to: ",
        answerOptions: [
        { answerText: "3Ws 2H", isCorrect: false },
        { answerText: "2Ws", isCorrect: false },
        { answerText: "5Ws 1H", isCorrect: true },
        { answerText: "5Hs 1W", isCorrect: false },
      ],
    },
    {
      questionText: "17)	What are the two main types of news?",
        answerOptions: [
        { answerText: "Hard and Soft News", isCorrect: true },
        { answerText: "Rough and Smooth News", isCorrect: false },
        { answerText: "Hot and Cold News", isCorrect: false },
        { answerText: "Calm and Intense News", isCorrect: false },
      ],
    },
    {
      questionText: "18)	What should always be considered when filming a shot?",
        answerOptions: [
        { answerText: "Sound", isCorrect: false },
        { answerText: "Battery Power", isCorrect: false },
        { answerText: "Shot List", isCorrect: false },
        { answerText: "Rule of Thirds", isCorrect: true },
      ],
    },
    {
      questionText:"19)	For a crime beat reporter which of the following is a source?",
        answerOptions: [
        { answerText: "Police and Witnesses", isCorrect: true },
        { answerText: "Editors and Staff", isCorrect: false },
        { answerText: "Both A and B", isCorrect: false },
        { answerText: "None of the Above", isCorrect: false },
      ],
    },
    {
      questionText: "20)	What is the full form of the term MoJo?",
        answerOptions: [
        { answerText: "Mobile Journalism", isCorrect: true },
        { answerText: "Mobility Journalism", isCorrect: false },
        { answerText: "Motorcycle Journalism", isCorrect: false },
        { answerText: "Modern Journalism", isCorrect: false },
      ],
    },
    {
      questionText: "21)	Which of these does not help in the formation of public opinion?",
        answerOptions: [
        { answerText: "Television", isCorrect: false },
        { answerText: "Radio", isCorrect: false },
        { answerText: "Printed Media", isCorrect: false },
        { answerText: "Fiction", isCorrect: true },
      ],
    },
    {
      questionText: "22)	Journalistic criteria to determine news when something affects people is called ________.",
        answerOptions: [
        { answerText: "Number", isCorrect: false },
        { answerText: "Impact", isCorrect: true },
        { answerText: "Majority", isCorrect: false },
        { answerText: "Large", isCorrect: false },
      ],
    },
    {
      questionText: "23)	Correcting, improving, and designing a news story to be printed is called",
        answerOptions: [
        { answerText: "Copyediting", isCorrect: true },
        { answerText: "Proofreading", isCorrect: false },
        { answerText: "Printing", isCorrect: false },
        { answerText: "Writing", isCorrect: false },
      ],
    },
    {
      questionText: "24)	In this kind of page layout, articles are put side by side so that the headlines are adjacent.",
        answerOptions: [
        { answerText: "Banner", isCorrect: false },
        { answerText: "Hard News", isCorrect: false },
        { answerText: "Ears Newspapers", isCorrect: false },
        { answerText: "Tombstoning", isCorrect: true },
      ],
    },
    {
      questionText: "25)	The headline with more than two lines which are justified on the right side and unjustified on the left is termed as:",
        answerOptions: [
        { answerText: "Crosser", isCorrect: false },
        { answerText: "Hanging Indentation", isCorrect: true },
        { answerText: "Hammer", isCorrect: false },
        { answerText: "Right angle", isCorrect: false },
      ],
    },
    {
      questionText: "26)	A preliminary layout of a newspaper page, showing the placement of stories, headlines, pictures, and advertisements",
        answerOptions: [
        { answerText: "Dummy Layout", isCorrect: true },
        { answerText: "Exclusive Layout", isCorrect: false },
        { answerText: "Pre-Layout", isCorrect: false },
        { answerText: "Final-Layout", isCorrect: false },
      ],
    },
    {
      questionText: "27)	Which editor allots news stories to writers, reporters and photographers for coverage?",
        answerOptions: [
        { answerText: "Chief editor", isCorrect: false },
        { answerText: "Managing Editor", isCorrect: false },
        { answerText: "Assignment Editor", isCorrect: true},
        { answerText: "Sub Editor", isCorrect: false },
      ],
    },
    {
      questionText: "28)	A ____________ draws a vivid word picture of the news setting, surroundings or circumstances.",
        answerOptions: [
        { answerText: "Contrast Lead", isCorrect: false },
        { answerText: "Narrative Lead", isCorrect: true },
        { answerText: "Quotation Lead", isCorrect: false },
        { answerText: "Direct Address Lead", isCorrect: false },
      ],
    },
    {
      questionText: "29)	How many columns does each newspaper have?",
        answerOptions: [
        { answerText: "8", isCorrect: true },
        { answerText: "5", isCorrect: false },
        { answerText: "9", isCorrect: false },
        { answerText: "6", isCorrect: false },
      ],
    },
    {
      questionText: "30)	What is the purpose of a nutgraf?",
        answerOptions: [
        { answerText: "Concludes the whole story", isCorrect: false },
        { answerText: "Explains context of a story", isCorrect: true },
        { answerText: "Depicts data visually", isCorrect: false },
        { answerText: "Acts as an inverted pyramid", isCorrect: false },
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
