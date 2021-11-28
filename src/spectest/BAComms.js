import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default function BAComms() {
  const questions = [
    {
      questionText: "1)	Communication is a part of ______ skills.",
      answerOptions: [
        { answerText: "Hard", isCorrect: false },
        { answerText: "Soft", isCorrect: true },
        { answerText: "RoughSybase", isCorrect: false },
        { answerText: "Smooth", isCorrect: false },
      ],
    },
    {
      questionText: "2)	________ context refers to the relationship between the sender and the receiver.",
      answerOptions: [
        { answerText: "Social", isCorrect: false },
        { answerText: "Cultural", isCorrect: true },
        { answerText: "Physical", isCorrect: false },
        { answerText: "Chronological", isCorrect: false },
      ],
    },
    {
      questionText: "3)	For effective communication, which of these commandments should one NOT follow?",
      answerOptions: [
        { answerText: "Objective of Communication", isCorrect: false },
        { answerText: "Adequate Medium", isCorrect: false },
        { answerText: "Inadequate Medium", isCorrect: true },
        { answerText: "Clarity", isCorrect: false },
      ],
    },
    {
      questionText: "4)	Which among the following below is NOT involved in the process of communication?",
      answerOptions: [
        { answerText: "Channel", isCorrect: false },
        { answerText: "Pipe", isCorrect: true },
        { answerText: "Receiver", isCorrect: false },
        { answerText: "Sender", isCorrect: false },
      ],
    },
    {
      questionText: "5) _______ communication flows from a superior to a subordinate.",
      answerOptions: [
        { answerText: "Diagonal", isCorrect: false },
        { answerText: "Lateral", isCorrect: false },
        { answerText: "Upward", isCorrect: false },
        { answerText: "Downward", isCorrect: true },
      ],
    },
    {
      questionText: "6)	Which of these is the external sounds present in the channels of communication?",
      answerOptions: [
        { answerText: "Overcommunication", isCorrect: false },
        { answerText: "Cultural Barriers", isCorrect: false },
        { answerText: "Semantic Problems", isCorrect: false },
        { answerText: "Noise", isCorrect: true },
      ],
    },
    {
      questionText: "7)	______ means to impart understanding of the message.",
      answerOptions: [
        { answerText: "Encoding", isCorrect: false },
        { answerText: "Decoding", isCorrect: true },
        { answerText: "Receiving", isCorrect: false },
        { answerText: "Feedback", isCorrect: false },
      ],
    },
    {
      questionText: "8)	When do you consider the communication process to be complete?",
      answerOptions: [
        { answerText: "When the sender transmits the message", isCorrect: false },
        { answerText: "When the message enters the channel30 bytes", isCorrect: false },
        { answerText: "When the message leaves the channel", isCorrect: false },
        { answerText: "When the receiver receives and understands the message.", isCorrect: true },
      ],
    },
    {
      questionText: "9)	Which of these is the most frequently used channel of communication?",
      answerOptions: [
        { answerText: "Horizontal communication", isCorrect: true },
        { answerText: "Upward communication", isCorrect: false },
        { answerText: "Downward communication", isCorrect: false },
        { answerText: "Downward communication", isCorrect: false },
      ],
    },
    {
      questionText: "10)	_______ communication is a dictator type communication.",
        answerOptions: [
        { answerText: "One-way", isCorrect: true },
        { answerText: "Two-way", isCorrect: false },
        { answerText: "Three-way", isCorrect: false },
        { answerText: "Three-way", isCorrect: false },
      ],
    },
    {
      questionText: "11)	In an office, an employee communicates horizontally with his _______.",
        answerOptions: [
        { answerText: "Assistant", isCorrect: false },
        { answerText: "Colleagues", isCorrect: true },
        { answerText: "Superiors", isCorrect: false },
        { answerText: "Subordinates", isCorrect: false },
      ],
    },
    {
      questionText: "12)	Which among the following ways of communicating has the most reach?",
        answerOptions: [
        { answerText: "Writing", isCorrect: true },
        { answerText: "Speaking", isCorrect: false },
        { answerText: "Listening", isCorrect: false },
        { answerText: "Talking", isCorrect: false },
      ],
    },
    {
      questionText: "13)	Which among the following below is a type of informal communication?",
        answerOptions: [
        { answerText: "Instructions", isCorrect: false },
        { answerText: "Instructions", isCorrect: false },
        { answerText: "Reports", isCorrect: false },
        { answerText: "Grapevine", isCorrect: true },
      ],
    },
    {
      questionText: "14)   Which of these is the most common type of grapevine?",
        answerOptions: [
        { answerText: "Cluster chain", isCorrect: true },
        { answerText: "Probability chain", isCorrect: false },
        { answerText: "Single strand chain", isCorrect: false },
        { answerText: "Gossip chain", isCorrect: false },
      ],
    },
    {
      questionText: "15)	Which of these is not a type of effective listening?",
        answerOptions: [
        { answerText: "Appreciative listening", isCorrect: false },
        { answerText: "Irritated listeningBridge", isCorrect: true },
        { answerText: "Discriminative listening", isCorrect: false },
        { answerText: "Evaluative listening", isCorrect: false },
      ],
    },
    {
      questionText: "16)	In the process of Communication, which of the following is in the chronological order?",
        answerOptions: [
        { answerText: "Medium, Communicator, Message, Receiver, Effect", isCorrect: false },
        { answerText: "Communication, Medium, Receiver, Effect, Message", isCorrect: false },
        { answerText: "Communicator, Message, Medium, Receiver, Effect", isCorrect: true },
        { answerText: "Message, Communicator, Medium, Receiver, Effect", isCorrect: false },
      ],
    },
    {
      questionText: "17)	Which of these is not considered in a telephonic conversation?",
        answerOptions: [
        { answerText: "Body language", isCorrect: false },
        { answerText: "The volume of the speaker", isCorrect: true },
        { answerText: "The tone of the speaker", isCorrect: false },
        { answerText: "The emotional content of the communication", isCorrect: false },
      ],
    },
    {
      questionText: "18)	Which of these is NOT an element of non-verbal communication?",
        answerOptions: [
        { answerText: "Age of the speaker", isCorrect: false },
        { answerText: "Name of the speaker", isCorrect: false },
        { answerText: "Name of the listener", isCorrect: false },
        { answerText: "The volume of the speaker", isCorrect: true },
      ],
    },
    {
      questionText:"19) 	What is the first thing you must utter when you pick up a call?",
        answerOptions: [
        { answerText: "Your name and designation", isCorrect: true },
        { answerText: "Why did you call?", isCorrect: false },
        { answerText: "What do you want?", isCorrect: false },
        { answerText: "Where are you from?", isCorrect: false },
      ],
    },
    {
      questionText: "20)	Which of these should be kept in mind while giving instructions?",
        answerOptions: [
        { answerText: "The physical condition of the receiver", isCorrect: false },
        { answerText: "The ability to grasp information", isCorrect: true },
        { answerText: "The tone of the receiver", isCorrect: false },
        { answerText: "The pitch of the receiver", isCorrect: false },
      ],
    },
    {
      questionText: "21)	True or False: Personal appearance is an element of non-verbal communication.",
        answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "22)	_________ should be avoided in a conversation.",
        answerOptions: [
        { answerText: "Slang", isCorrect: true },
        { answerText: "Standard Words", isCorrect: false },
        { answerText: "Greetings", isCorrect: false },
        { answerText: "Name of the other person", isCorrect: false },
      ],
    },
    {
      questionText: "23)	Which of these is not a commandment of effective communication?",
        answerOptions: [
        { answerText: "Home Communication Skill", isCorrect: false },
        { answerText: "Clarity in Language", isCorrect: false },
        { answerText: "Adequate Medium", isCorrect: false },
        { answerText: "Poor Listening", isCorrect: true },
      ],
    },
    {
      questionText: "24)	Which of these is important in having mutual understanding with colleagues?",
        answerOptions: [
        { answerText: "Writing", isCorrect: false },
        { answerText: "Talking", isCorrect: false },
        { answerText: "Speaking", isCorrect: false },
        { answerText: "Effective listening", isCorrect: true },
      ],
    },
    {
      questionText: "25)	In mass communication, selective perception is dependent on the receiver’s _____.",
        answerOptions: [
        { answerText: "Receptivity", isCorrect: true },
        { answerText: "Competence", isCorrect: false },
        { answerText: "Pre-Disposition", isCorrect: false },
        { answerText: "Ethnicity", isCorrect: false },
      ],
    },
    {
      questionText: "26)	Organizational communication can also be equated with",
        answerOptions: [
        { answerText: "Mass Communication", isCorrect: false },
        { answerText: "Group Communication", isCorrect: true },
        { answerText: "Interpersonal Communication", isCorrect: false },
        { answerText: "Intrapersonal Communication", isCorrect: false },
      ],
    },
    {
      questionText: "27)	Which of these is NOT an appropriate non-verbal communication at work?",
        answerOptions: [
        { answerText: "Sitting straight", isCorrect: false },
        { answerText: "Tilting head a bit to listen", isCorrect: false },
        { answerText: "Talking at moderate speed", isCorrect: false },
        { answerText: "Keeping hands in pockets while talking", isCorrect: true },
      ],
    },
    {
      questionText: "28)	The study of touching behavior in non-verbal communication is known as:",
        answerOptions: [
        { answerText: "Semantics", isCorrect: false },
        { answerText: "Haptics", isCorrect: true },
        { answerText: "Proxemics", isCorrect: false },
        { answerText: "Chronemics", isCorrect: false },
      ],
    },
    {
      questionText: "29)  Which of the following is an effective component of good feedback?",
        answerOptions: [
        { answerText: "Specific", isCorrect: true },
        { answerText: "Indirect", isCorrect: false },
        { answerText: "Opinion-based", isCorrect: false },
        { answerText: "Detailed and time consuming", isCorrect: false },
      ],
    },
    {
      questionText: "30)	Communication becomes circular when:",
        answerOptions: [
        { answerText: "The Source is Credible", isCorrect: false },
        { answerText: "The Decoder becomes an Encoder", isCorrect: true },
        { answerText: "The Feedback is Absent", isCorrect: false },
        { answerText: "The Channel is Clear", isCorrect: false },
      ],
    },
  ];



  questions.sort();


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
