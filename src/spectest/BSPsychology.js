import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";

export default function BSPsychology() {
  const questions = [
    {
      questionText: "1)	Which of the following is the final destination for much of the brain’s information about emotion before action is taken?",
      answerOptions: [
        { answerText: "Pre-frontal cortex", isCorrect: true },
        { answerText: "Anterior cingulated cortex", isCorrect: false },
        { answerText: "Hypothalamus", isCorrect: false },
        { answerText: "Amygdala", isCorrect: false },
      ],
    },
    {
      questionText: "2)	Psychology is defined as the scientific study of:",
      answerOptions: [
        { answerText: "emotions and beliefs", isCorrect: false },
        { answerText: "mind and behavior", isCorrect: true },
        { answerText: "perception and religion", isCorrect: false },
        { answerText: "people and things", isCorrect: false },
      ],
    },
    {
      questionText: "3)	Any stimulus that follows a behavior and increases the likelihood that the behavior will be repeated is called a ________.",
      answerOptions: [
        { answerText: "Reinforcer", isCorrect: true },
        { answerText: "Punisher", isCorrect: false },
        { answerText: "Situational stimulus", isCorrect: false },
        { answerText: "Cue", isCorrect: false },
      ],
    },
    {
      questionText: "4)	The ability to learn by observing a model or receiving instructions without reinforcement is called ________.",
      answerOptions: [
        { answerText: "Instrumental Learning", isCorrect: false },
        { answerText: "Cognitive Learning", isCorrect: false },
        { answerText: "Social Learning", isCorrect: true },
        { answerText: "Contingency", isCorrect: false },
      ],
    },
    {
      questionText: "5)	The influence of parents on the personality of their children is:",
      answerOptions: [
        { answerText: "consistent across the lifespan", isCorrect: false },
        { answerText: "strongest in early childhood", isCorrect: true },
        { answerText: "weakest in early childhood", isCorrect: false },
        { answerText: "non-existent", isCorrect: false },
      ],
    },
    {
      questionText: "6)	Which of the following is not a defense mechanism?",
      answerOptions: [
        { answerText: "regression", isCorrect: false },
        { answerText: "sublimation", isCorrect: false },
        { answerText: "projection", isCorrect: false },
        { answerText: "ingratiation", isCorrect: true },
      ],
    },
    {
      questionText: "7)	The idea that you can assess someone’s personality by studying their face is called:",
      answerOptions: [
        { answerText: "physiology", isCorrect: false },
        { answerText: "physiognomy", isCorrect: true },
        { answerText: "phrenology", isCorrect: false },
        { answerText: "somatology", isCorrect: false },
      ],
    },
    {
      questionText: "8)	Which of the following below is part of the psychosocial domain?",
      answerOptions: [
        { answerText: "Judgement", isCorrect: false },
        { answerText: "Motor Skills", isCorrect: false },
        { answerText: "Style of Behaving", isCorrect: true },
        { answerText: "Memory", isCorrect: false },
      ],
    },
    {
      questionText: "9)	Freud founded the ________ approach to understanding human behavior.",
      answerOptions: [
        { answerText: "psychedelic", isCorrect: false },
        { answerText: "patronymic", isCorrect: false },
        { answerText: "psychodynamic", isCorrect: true },
        { answerText: "psychodynamic", isCorrect: false },
      ],
    },
    {
      questionText: "10)	Someone who feels as though they are not living up to expectations would be described by Adler as having:",
        answerOptions: [
        { answerText: "low actualization", isCorrect: false },
        { answerText: "an inferiority complex", isCorrect: true },
        { answerText: "low self-realization", isCorrect: false },
        { answerText: "an Adlerian complex", isCorrect: false },
      ],
    },
    {
      questionText: "11)	Which is the correct order of the emergence of following Psycho-Social strengths?",
        answerOptions: [
        { answerText: "Fidelity, Love, Care, Wisdom ", isCorrect: true },
        { answerText: "Care, Fidelity, Wisdom, Love", isCorrect: false },
        { answerText: "Love, Fidelity, Wisdom, Care", isCorrect: false },
        { answerText: "Care, Fidelity, Love, Wisdom", isCorrect: false },
      ],
    },
    {
      questionText: "12)	The growth needs of ERG theory are represented by various needs in Maslow’s model–",
        answerOptions: [
        { answerText: "Safety needs and esteem needs", isCorrect: false },
        { answerText: "Esteem needs and self-actualization needs", isCorrect: true },
        { answerText: "Physiological and social needs", isCorrect: false },
        { answerText: "Social needs and esteem needs", isCorrect: false },
      ],
    },
    {
      questionText: "13)	Who is the father of Experimental psychology?",
        answerOptions: [
        { answerText: "Sigmund Freud", isCorrect: false },
        { answerText: "Carl Jung", isCorrect: false },
        { answerText: "Wilhelm Wundt", isCorrect: true },
        { answerText: "benefit from political interests", isCorrect: false },
      ],
    },
    {
      questionText: "14)	Which of the following explains how people use the media for their own need?14)	Which of the following part of the brain is responsible for transferring short-term memory to long-term memory?",
        answerOptions: [
        { answerText: "Amygdala", isCorrect: false },
        { answerText: "Cerebellum", isCorrect: false },
        { answerText: "Parietal lobe", isCorrect: false },
        { answerText: "Hippocampus", isCorrect: true },
      ],
    },
    {
      questionText: "15)	Shaping in instrumental conditioning means:",
        answerOptions: [
        { answerText: "Focus on accuracy) It involves reinforcing successive approximations of the final desired behavior", isCorrect: true },
        { answerText: "Consistent occurrence of a behavior in the presence of discriminative stimulus", isCorrect: false },
        { answerText: "Teaching a complex sequence of behaviors by first shaping the final response in a sequence and then working backwards", isCorrect: false },
        { answerText: "A continuous reinforcement schedule is used for establishing new behaviors", isCorrect: false },
      ],
    },
    {
      questionText: "16)	People who lose their touch with reality when they are ______.",
        answerOptions: [
        { answerText: "Psychotic", isCorrect: true },
        { answerText: "Manic", isCorrect: false },
        { answerText: "Psychopathic", isCorrect: false },
        { answerText: "Neurotic", isCorrect: false },
      ],
    },
    {
      questionText: "17)	Which of the following is another term for reinforcement?",
        answerOptions: [
        { answerText: "Condition", isCorrect: false },
        { answerText: "Response", isCorrect: false },
        { answerText: "Reward", isCorrect: true },
        { answerText: "Punishment", isCorrect: false },
      ],
    },
    {
      questionText: "18)	Which field of psychology would be most likely to study the influence of over-crowding on conformity?",
        answerOptions: [
        { answerText: "clinical", isCorrect: false },
        { answerText: "social", isCorrect: true },
        { answerText: "cognitive", isCorrect: false },
        { answerText: "personality", isCorrect: false },
      ],
    },
    {
      questionText:"19)	Case formulation is _________",
        answerOptions: [
        { answerText: "Analyzing clients behavior on a case-by-case basis.", isCorrect: false },
        { answerText: "Using previous case studies for diagnosis.", isCorrect: false },
        { answerText: "Using the psychiatric diagnostic model of psychopathology.", isCorrect: false },
        { answerText: "Using information to draw up a psychological explanation of the client's problems and to develop a plan for therapy.", isCorrect: true },
      ],
    },
    {
      questionText: "20)	Face validity refers to which of the following?",
        answerOptions: [
        { answerText: "The notion that an assessment method may appear to be valid simply because it has questions which intuitively seem relevant to the trait or characteristic being measured.", isCorrect: true },
        { answerText: "A construct is a hypothetical or inferred attribute that may not be directly observable or directly measurable", isCorrect: false },
        { answerText: "Facial expression is used to make a diagnosis", isCorrect: false },
        { answerText: "The scale of emotional responding.", isCorrect: false },
      ],
    },
    {
      questionText: "21)	Which of the following is the correct acronym for MMSE?",
        answerOptions: [
        { answerText: "Multiple Mental Strata Evaluation.", isCorrect: false },
        { answerText: "Mini Mental State Examination", isCorrect: true },
        { answerText: "Multi Memory State Examination", isCorrect: false },
        { answerText: "Meta Mental Structural Evaluation.", isCorrect: false},
      ],
    },
    {
      questionText: "22)	Receiving an electric shock would be an example of a ______ whereas being frightened would be an example of a ______.",
        answerOptions: [
        { answerText: "reaction, emotion", isCorrect: false },
        { answerText: "reinforcement, stimulus", isCorrect: false },
        { answerText: "stimulus, response", isCorrect: true },
        { answerText: "punishment, reward", isCorrect: false },
      ],
    },
    {
      questionText: "23)	The process by which a trained professional uses psychological methods to help people with a psychological problem is known as:",
        answerOptions: [
        { answerText: "Psychoanalysis", isCorrect: false },
        { answerText: "Psychosurgery", isCorrect: true },
        { answerText: "Psychotherapy", isCorrect: false },
        { answerText: "Psychiatry ", isCorrect: false },
      ],
    },
    {
      questionText: "24)	Which school of psychology believes that it is impossible to objectively study the mind?",
        answerOptions: [
        { answerText: "behaviorism", isCorrect: true },
        { answerText: "functionalism", isCorrect: false },
        { answerText: "socialism", isCorrect: false },
        { answerText: "humanism", isCorrect: false },
      ],
    },
    {
      questionText: "25)	People who consistently come up with _________ explanations of events are more prone to depression.",
        answerOptions: [
        { answerText: "Optimistic", isCorrect: false },
        { answerText: "Pessimistic", isCorrect: true },
        { answerText: "Sensational", isCorrect: false },
        { answerText: "Delusional", isCorrect: false },
      ],
    },
    {
      questionText: "26)	How many schools of psychology are there?",
        answerOptions: [
        { answerText: "Three", isCorrect: false },
        { answerText: "Five", isCorrect: false },
        { answerText: "Seven", isCorrect: true },
        { answerText: "Nine", isCorrect: false },
      ],
    },
    {
      questionText: "27)	Who is the Greek philosopher who believes that knowledge is acquired through experience and learning?",
        answerOptions: [
        { answerText: "Aristotle", isCorrect: true },
        { answerText: "Plato", isCorrect: false },
        { answerText: "Archimedes", isCorrect: false },
        { answerText: "Socrates", isCorrect: false },
      ],
    },
    {
      questionText: "28)	The human central nervous system is composed of",
        answerOptions: [
        { answerText: "Brain and Spinal Cord", isCorrect: true },
        { answerText: "Somatic Nervous System", isCorrect: false },
        { answerText: "Autonomic Nervous System", isCorrect: false },
        { answerText: "Both B and C", isCorrect: false },
      ],
    },
    {
      questionText: "29)	According to Piaget, “the process of building mental representation of the world through direct interaction with it” is called __________.",
        answerOptions: [
        { answerText: "Egocentrism", isCorrect: false },
        { answerText: "Adaptation", isCorrect: true },
        { answerText: "Conservation", isCorrect: false },
        { answerText: "Metacognition", isCorrect: false },
      ],
    },
    {
      questionText: "30)  For how many seconds does short-term memory hold information?",
        answerOptions: [
        { answerText: "10 to 15 seconds", isCorrect: false },
        { answerText: "30 seconds or less", isCorrect: true },
        { answerText: "50 seconds", isCorrect: false },
        { answerText: "More than 50 seconds", isCorrect: false },
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
