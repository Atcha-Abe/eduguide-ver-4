import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default function BSNursing() {
  const questions = [
    {
      questionText: "1)	What are the four major concepts in nursing theory?",
      answerOptions: [
        { answerText: "Nurse, Person, Environment, Cure", isCorrect: false },
        { answerText: "Person, Environment, Health, Nursing", isCorrect: true },
        { answerText: "Person, Environment, Nurse, Health", isCorrect: false },
        { answerText: "Promotive, Preventive, Curative, Rehabilitative", isCorrect: false },
      ],
    },
    {
      questionText: "2)	What type of patient care model is the most common for student nurses and private duty nurses?",
      answerOptions: [
        { answerText: "Primary Nursing", isCorrect: false },
        { answerText: "Total patient care", isCorrect: true },
        { answerText: "Case management", isCorrect: false },
        { answerText: "Team nursing", isCorrect: false },
      ],
    },
    {
      questionText: "3)	What does the first aid acronym AVPU stand for?",
      answerOptions: [
        { answerText: "Alive, Voice, Pinch, Unresponsive", isCorrect: false },
        { answerText: "Asleep, Voice, Pain, Unresponsive", isCorrect: false },
        { answerText: "Alert, Voice, Pain, Unresponsive", isCorrect: true },
        { answerText: "Awake, Voice, Pain, Unresponsive", isCorrect: false },
      ],
    },
    {
      questionText: "4)	What factors can cause a person’s brain not to function effectively?",
      answerOptions: [
        { answerText: "Lack of Oxygen", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
        { answerText: "Stroke", isCorrect: false },
        { answerText: "Low Blood Sugar", isCorrect: false },
      ],
    },
    {
      questionText: "5)	 In the hospital, patients may be offered antiseptic washes and wipes in order to ______.",
      answerOptions: [
        { answerText: "stop their skin from becoming dry due to harsh soaps", isCorrect: false },
        { answerText: "make them feel clean", isCorrect: false },
        { answerText: "clean their hands before meals", isCorrect: false },
        { answerText: "reduce the risk of contracting infections", isCorrect: true },
      ],
    },
    {
      questionText: "6)	Equipment used for hygiene needs such as shavers, _______",
      answerOptions: [
        { answerText: "must always be stored in a safe place", isCorrect: false },
        { answerText: "must be cleaned between patients", isCorrect: false },
        { answerText: "can be shared between patients", isCorrect: false },
        { answerText: "must not be shared between patients", isCorrect: true },
      ],
    },
    {
      questionText: "7)	When writing in patients’ notes what must always be there?",
      answerOptions: [
        { answerText: "date, time, signature", isCorrect: false },
        { answerText: "date, time, signature, printed name, position held", isCorrect: true },
        { answerText: "date, time, signature, printed name", isCorrect: false },
        { answerText: "date, time, signature, address", isCorrect: false },
      ],
    },
    {
      questionText: "8)	When taking a manual blood pressure which artery do you palpate?",
      answerOptions: [
        { answerText: "Radial", isCorrect: false },
        { answerText: "Carotid", isCorrect: false },
        { answerText: "Femoral", isCorrect: false },
        { answerText: "Brachial", isCorrect: true },
      ],
    },
    {
      questionText: "9)	Which temperature indicates a pyrexia?",
      answerOptions: [
        { answerText: "37.5–38.5°C", isCorrect: true },
        { answerText: "37.0–38.0°C", isCorrect: false },
        { answerText: "36.0–37.5°C", isCorrect: false },
        { answerText: "38.0–39.0°C", isCorrect: false },
      ],
    },
    {
      questionText: "10)	Which of these measurements are included in vital sign monitoring? 1. Urine Output 2. Respiratory Rate 3. Blood Glucose 4. Temperature ",
        answerOptions: [
        { answerText: "2 and 4", isCorrect: true },
        { answerText: "1 only", isCorrect: false },
        { answerText: "1 and 3", isCorrect: false },
        { answerText: "1,2,3, and 4", isCorrect: false },
      ],
    },
    {
      questionText: "11)	What do you call an instrument placed against a patients chest to hear both lung and heart sounds?",
        answerOptions: [
        { answerText: "Telescope", isCorrect: false },
        { answerText: "Stethoscope", isCorrect: true },
        { answerText: "Otoscope ", isCorrect: false },
        { answerText: "Sphygmomanometer", isCorrect: false },
      ],
    },
    {
      questionText: "12)	Which of the following clinical finding indicates the patient is experiencing hypokalemia?",
        answerOptions: [
        { answerText: "Abdominal distention", isCorrect: true },
        { answerText: "Edema", isCorrect: false },
        { answerText: "Muscle spasms", isCorrect: false },
        { answerText: "Kussmaul breathing", isCorrect: false },
      ],
    },
    {
      questionText: "13)	Which of the following is the appropriate route of administration for insulin?",
        answerOptions: [
        { answerText: "Intradermal", isCorrect: false },
        { answerText: "Intravenous", isCorrect: false },
        { answerText: "Intramuscular", isCorrect: false },
        { answerText: "Subcutaneous", isCorrect: true },
      ],
    },
    {
      questionText: "14)	The thoracic and abdominopelvic cavities are divided by which of the following body structures?",
        answerOptions: [
        { answerText: "Diaphragm", isCorrect: true },
        { answerText: "Stomach", isCorrect: false },
        { answerText: "Ribcage", isCorrect: false },
        { answerText: "Sternum", isCorrect: false },
      ],
    },
    {
      questionText: "15)	The external rotation of hip in supine position, is prevented by using a ______.",
        answerOptions: [
        { answerText: "Bed Board", isCorrect: false },
        { answerText: "Trochanter Roll", isCorrect: true },
        { answerText: "Bed Cradle", isCorrect: false },
        { answerText: "Knee Rest", isCorrect: false },
      ],
    },
    {
      questionText: "16)	Which of the following is NOT a purpose of a partograph?",
        answerOptions: [
        { answerText: "To identify the stages of labor", isCorrect: false },
        { answerText: "To assess the fetal well-being", isCorrect: false },
        { answerText: "To predict post-partum hemorrhage", isCorrect: true },
        { answerText: "To monitor the progress of labor", isCorrect: false },
      ],
    },
    {
      questionText: "17)	What is the term used to indicate irregular uterine bleeding between menstrual cycles?",
        answerOptions: [
        { answerText: "Menorrhagia", isCorrect: false },
        { answerText: "Metrorrhagia", isCorrect: true },
        { answerText: "Menometrorrhagia", isCorrect: false },
        { answerText: "Polymenorrhoea", isCorrect: false },
      ],
    },
    {
      questionText: "18)	What do you call the radiological procedure to assess the anatomical patency and functional integrity of the fallopian tubes by injecting dye?",
        answerOptions: [
        { answerText: "Sonohysterosalpingography", isCorrect: false },
        { answerText: "Tubal inflation test", isCorrect: false },
        { answerText: "Hysteroscopy", isCorrect: false },
        { answerText: "Hysterosalpingography", isCorrect: true },
      ],
    },
    {
      questionText:"19)	In the nursing process, what is the name of the step where the nurse identifies a patient's responses to actual or potential health problems?",
        answerOptions: [
        { answerText: "Diagnosing", isCorrect: true },
        { answerText: "Planning", isCorrect: false },
        { answerText: "Evaluating", isCorrect: false },
        { answerText: "Assessing", isCorrect: false },
      ],
    },
    {
      questionText: "20)	Which tissue layer is common to all blood vessels?",
        answerOptions: [
        { answerText: "Connective Tissue", isCorrect: false },
        { answerText: "Endothelium", isCorrect: true },
        { answerText: "Circular Smooth Muscle", isCorrect: false },
        { answerText: "Longitudinal Striated Muscle", isCorrect: false },
      ],
    },
    {
      questionText: "21)	Which of the following statements below about circulatory systems is true?",
        answerOptions: [
        { answerText: "Hormones are transported in the blood", isCorrect: true },
        { answerText: "The systemic circulation carries blood to and from the lungs", isCorrect: false },
        { answerText: "Capillaries have thicker walls than veins", isCorrect: false },
        { answerText: "All invertebrates have an open circulatory system", isCorrect: false },
      ],
    },
    {
      questionText: "22)	What is the term used for normal respiratory rhythm and depth in a client?",
        answerOptions: [
        { answerText: "Eupnea", isCorrect: true },
        { answerText: "Apnea", isCorrect: false },
        { answerText: "Tachypnea", isCorrect: false },
        { answerText: "Bradypnea", isCorrect: false },
      ],
    },
    {
      questionText: "23)	What is the maximum duration of time the nurse allows an IV bag of solution to infuse in to a patient?",
        answerOptions: [
        { answerText: "12 Hours", isCorrect: false },
        { answerText: "18 Hours", isCorrect: false },
        { answerText: "36 Hours", isCorrect: false },
        { answerText: "24 Hours", isCorrect: true },
      ],
    },
    {
      questionText: "24)	What is the priority nursing intervention for a patient during the immediate post-operative period?",
        answerOptions: [
        { answerText: "Recording the intake and output", isCorrect: false },
        { answerText: "Checking the vital signs every 15 minutes", isCorrect: false },
        { answerText: "Observing for hemorrhage", isCorrect: false },
        { answerText: "Maintaining a patent airway", isCorrect: true },
      ],
    },
    {
      questionText: "25)	Which of the following vitamins below is known to have a role in healing wounds?",
        answerOptions: [
        { answerText: "Vitamin C", isCorrect: true },
        { answerText: "Vitamin K", isCorrect: false },
        { answerText: "Vitamin B complex", isCorrect: false },
        { answerText: "Vitamin D", isCorrect: false },
      ],
    },
    {
      questionText: "26)	Which of the following is NOT a part of the mandible?",
        answerOptions: [
        { answerText: "Alveolar process", isCorrect: false },
        { answerText: "Glabella", isCorrect: true },
        { answerText: "Mental protuberance", isCorrect: false },
        { answerText: "Mental foramen", isCorrect: false },
      ],
    },
    {
      questionText: "27)	External occipital protuberance is also called:",
        answerOptions: [
        { answerText: "Acromion", isCorrect: false },
        { answerText: "Nasion", isCorrect: false },
        { answerText: "Dens", isCorrect: false },
        { answerText: "Inion", isCorrect: true },
      ],
    },
    {
      questionText: "28)	Which of the following is NOT a shoulder muscle?",
        answerOptions: [
        { answerText: "Teres minor", isCorrect: false },
        { answerText: "Pectineus muscle", isCorrect: true },
        { answerText: "Supraspinatus", isCorrect: false },
        { answerText: "Deltoid", isCorrect: false },
      ],
    },
    {
      questionText: "29)	What is the most common cause of high cardiac output hypotension?",
        answerOptions: [
        { answerText: "sepsis", isCorrect: true },
        { answerText: "cardiac failure", isCorrect: false },
        { answerText: "neurogenic shock", isCorrect: false },
        { answerText: "hemorrhage", isCorrect: false },
      ],
    },
    {
      questionText: "30)	 Oral contraceptive pills function by inhibiting _________.",
        answerOptions: [
        { answerText: "Implantation", isCorrect: false },
        { answerText: "Ovulation", isCorrect: true },
        { answerText: "Reproduction", isCorrect: false },
        { answerText: "Fertilization", isCorrect: false },
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
