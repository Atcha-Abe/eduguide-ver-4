import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default function BSIT() {
  const questions = [
    {
      questionText: "1)	Which of the following is not a database management software?",
      answerOptions: [
        {answerText: "COBOL", isCorrect: false },
        {answerText: "Oracle", isCorrect: true },
        { answerText: "Sybase", isCorrect: false },
        { answerText: "MySQL", isCorrect: false },
      ],
    },
    {
      questionText:
        "2)	Which of the following transmission medium is used by radio?",
      answerOptions: [
        { answerText: "Antenna", isCorrect: false },
        { answerText: "Air", isCorrect: true },
        { answerText: "Optical Fiber", isCorrect: false },
        { answerText: "Filter", isCorrect: false },
      ],
    },
    {
      questionText: "3)	What are the total number of pins in a traditional parallel port?",
      answerOptions: [
        { answerText: "14", isCorrect: false },
        { answerText: "25", isCorrect: true },
        { answerText: "27", isCorrect: false },
        { answerText: "30", isCorrect: false },
      ],
    },
    {
      questionText: "4)	Computers in a networking system are known as the",
      answerOptions: [
        { answerText: "Hubs", isCorrect: false },
        { answerText: "Workstations", isCorrect: false },
        { answerText: "Nodes", isCorrect: true },
        { answerText: "Systems", isCorrect: false },
      ],
    },
    {
      questionText: "5)	A network that spreads over cities is known as",
      answerOptions: [
        { answerText: "WAN", isCorrect: true },
        { answerText: "LAN", isCorrect: false },
        { answerText: "MAN", isCorrect: false },
        { answerText: "BAN", isCorrect: false },
      ],
    },
    {
      questionText: "6)	The total number of layers in the Transmission Control Protocol / Internet Protocol (TCP/IP)",
      answerOptions: [
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "4", isCorrect: true },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText: "7)	Which of the following cables provides highest bandwidth and faster transmission rate?",
      answerOptions: [
        { answerText: "UTP cable", isCorrect: false },
        { answerText: "Coaxial cable", isCorrect: false },
        { answerText: "Twisted pair cable", isCorrect: false },
        { answerText: "Fibre optic cable", isCorrect: true },
      ],
    },
    {
      questionText: "8)	What is the maximum length of the header in the TCP segment and IP datagram?",
      answerOptions: [
        { answerText: "24 bytes", isCorrect: false },
        { answerText: "30 bytes", isCorrect: false },
        { answerText: "36 bytes", isCorrect: false },
        { answerText: "60 bytes", isCorrect: true },
      ],
    },
    {
      questionText: "9)	Which protocol is used by the Ping command to send echo request packets between hosts in a network?",
      answerOptions: [
        { answerText: "Internet Protocol (IP)", isCorrect: false },
        { answerText: "Internet Control Message Protocol (ICMP)", isCorrect: true },
        { answerText: "Internet Group Management Protocol (IGMP)", isCorrect: false },
        { answerText: "Explicit Congestion Notification (ECN)", isCorrect: false },
      ],
    },
    {
      questionText: "10)	In Routing Information protocol (RIP), the maximum number of routers that it supports in a network is:",
        answerOptions: [
        { answerText: "12 Routers", isCorrect: false },
        { answerText: "15 Routers", isCorrect: true },
        { answerText: "20 Routersverloading", isCorrect: false },
        { answerText: "24 Routers", isCorrect: false },
      ],
    },
    {
      questionText: "11)	What does the abbreviation: DoS stand for?",
        answerOptions: [
        { answerText: "Denial-of-System", isCorrect: false },
        { answerText: "Degradation-of-Service", isCorrect: false },
        { answerText: "Degradation-of-System", isCorrect: false },
        { answerText: "Denial-of-Service", isCorrect: true },
      ],
    },
    {
      questionText: "12)	What is the proper termination rate for UTP cables?",
        answerOptions: [
        { answerText: "100 ohms", isCorrect: true },
        { answerText: "110 ohms", isCorrect: false },
        { answerText: "120 ohms", isCorrect: false },
        { answerText: "125 ohms", isCorrect: false },
      ],
    },
    {
      questionText: "13)	Which one of these is a loopback ip address?",
        answerOptions: [
        { answerText: "192.168.1.1", isCorrect: false },
        { answerText: "255.255.255.0", isCorrect: false },
        { answerText: "127.0.0.1", isCorrect: true },
        { answerText: "10.10.10.1", isCorrect: false },
      ],
    },
    {
      questionText: "14)	What is the port number of FTP?",
        answerOptions: [
        { answerText: "18", isCorrect: false },
        { answerText: "20", isCorrect: false },
        { answerText: "21", isCorrect: true },
        { answerText: "24", isCorrect: false },
      ],
    },
    {
      questionText: "15)	The device containing software that help in determining the best path out of available path for particular transmission is called a ________.",
        answerOptions: [
        { answerText: "Router", isCorrect: true },
        { answerText: "Bridge", isCorrect: false },
        { answerText: "Switch", isCorrect: false },
        { answerText: "Repeater", isCorrect: false },
      ],
    },
    {
      questionText: "16)	What type of connector is used in a coaxial cable?",
        answerOptions: [
        { answerText: "PS/2", isCorrect: false },
        { answerText: "DIN", isCorrect: false },
        { answerText: "RJII", isCorrect: false },
        { answerText: "BNC", isCorrect: true },
      ],
    },
    {
      questionText: "17)	The inter connectivity of Computers to a common server within a small area is known as:",
        answerOptions: [
        { answerText: "SWAN", isCorrect: false },
        { answerText: "LAN", isCorrect: true },
        { answerText: "WAN", isCorrect: false },
        { answerText: "WLAN", isCorrect: false },
      ],
    },
    {
      questionText: "18)	Which of the following is not a function of the network layer?",
        answerOptions: [
        { answerText: "Convert data bits into frames", isCorrect: true },
        { answerText: "Connectionless communication", isCorrect: false },
        { answerText: "Message forwarding", isCorrect: false },
        { answerText: "Host addressing", isCorrect: false },
      ],
    },
    {
      questionText:"19)	What does EDI stand for?",
        answerOptions: [
        { answerText: "E-Commerce Data Interface", isCorrect: false },
        { answerText: "Electronic Data Interface", isCorrect: true },
        { answerText: "Electronic Data Interchange", isCorrect: false },
        { answerText: "Electronic Data Interaction", isCorrect: false },
      ],
    },
    {
      questionText: "20)	A data _________ is a repository of information collected from multiple sources, over a history of time, stored under a unified schema. and used for data analysis and decision support.",
        answerOptions: [
        { answerText: "Repository", isCorrect: false },
        { answerText: "Mine", isCorrect: false },
        { answerText: "Warehouse", isCorrect: true },
        { answerText: "Mall", isCorrect: false },
      ],
    },
    {
      questionText: "21)	Which of the following is not a phase during the communication via circuit switching?",
        answerOptions: [
        { answerText: "Data Transfer", isCorrect: false },
        { answerText: "Circuit Disconnect", isCorrect: false },
        { answerText: "Tunneling", isCorrect: true },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText: "22)	What year did the concept of computer networks emerge?",
        answerOptions: [
        { answerText: "1940’s", isCorrect: false },
        { answerText: "1950’s", isCorrect: false },
        { answerText: "1960’s", isCorrect: true },
        { answerText: "1970’s", isCorrect: false },
      ],
    },
    {
      questionText: "23)	What is the device that operates below the physical layer of the Open Systems Interconnection (OSI) model?",
        answerOptions: [
        { answerText: "Passive Hub", isCorrect: true },
        { answerText: "Active Hub", isCorrect: false },
        { answerText: "Repeater", isCorrect: false },
        { answerText: "Bridge", isCorrect: false },
      ],
    },
    {
      questionText: "24)	The connecting device which operates at the physical and data link layer is called ____.",
        answerOptions: [
        { answerText: "Bridge", isCorrect: true },
        { answerText: "Router", isCorrect: false },
        { answerText: "Repeater", isCorrect: false },
        { answerText: "Gateway", isCorrect: false },
      ],
    },
    {
      questionText: "25)	In the backbone network, the topology of the backbone is a _____.",
        answerOptions: [
        { answerText: "Star", isCorrect: false },
        { answerText: "Ring", isCorrect: false },
        { answerText: "Car", isCorrect: false },
        { answerText: "Bus", isCorrect: true },
      ],
    },
    {
      questionText: "26)   Which type of the following malware does not replicate or clone themselves through infection?",
        answerOptions: [
        { answerText: "Viruses", isCorrect: false },
        { answerText: "Worms", isCorrect: false },
        { answerText: "Trojans", isCorrect: true },
        { answerText: "Rootkits", isCorrect: false },
      ],
    },
    {
      questionText: "27)	How many layers can be found in the Open Systems Interconnection (OSI) model?",
        answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
        { answerText: "8", isCorrect: false },
      ],
    },
    {
      questionText: "28)	In the OSI model, Encryption and Compression are functions of which layer?",
        answerOptions: [
        { answerText: "Application Layer", isCorrect: false },
        { answerText: "Presentation Layer", isCorrect: true },
        { answerText: "Data Link Layer", isCorrect: false },
        { answerText: "Session Layer", isCorrect: false },
      ],
    },
    {
      questionText: "29)	The encryption technique that uses one message to hide another message is called ________.",
        answerOptions: [
        { answerText: "Hashing", isCorrect: false },
        { answerText: "Steganography", isCorrect: true },
        { answerText: "Message Delivery Agent ", isCorrect: false },
        { answerText: "None of the Above", isCorrect: false },
      ],
    },
    {
      questionText: "30)	_________________ is the term used in computer security to protect the data from being modified by the unauthorized user.",
        answerOptions: [
        { answerText: "Integrity", isCorrect: true },
        { answerText: "Confidentiality", isCorrect: false },
        { answerText: "Authentication", isCorrect: false },
        { answerText: "Availability", isCorrect: false },
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
