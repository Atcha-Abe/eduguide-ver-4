import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default function BAElemEd() {
  const questions = [
    {
      questionText: "1)	What is the method and practice of teaching, especially as an academic subject or theoretical concept called?",
      answerOptions: [
        { answerText: "Analogy", isCorrect: false },
        { answerText: "Pedagogy", isCorrect: true },
        { answerText: "Philosophy", isCorrect: false },
        { answerText: "Theology", isCorrect: false },
      ],
    },
    {
      questionText: "2)	Which of the following is a teacher-related factor affecting learning?",
      answerOptions: [
        { answerText: "Proper seating arrangement", isCorrect: false },
        { answerText: "Mastery over the subject matter", isCorrect: true },
        { answerText: "Availability of teaching-learning resources", isCorrect: false },
        { answerText: "Available technology", isCorrect: false },
      ],
    },
    {
      questionText: "3)	Mind Mapping refers to:",
      answerOptions: [
        { answerText: "drawing the picture of a mind", isCorrect: false },
        { answerText: "a technique to enhance comprehension", isCorrect: false },
        { answerText: "researching the function of the mind", isCorrect: true },
        { answerText: "a plan of action for an adventure", isCorrect: false },
      ],
    },
    {
      questionText: "4)	Critical pedagogy firmly believes that",
      answerOptions: [
        { answerText: "the learners need no reason independently ", isCorrect: false },
        { answerText: "the experiences and perceptions of learners are important", isCorrect: true },
        { answerText: "what children learn outside of school are irrelevant", isCorrect: false },
        { answerText: "the teacher should always lead the classroom instruction", isCorrect: false },
      ],
    },
    {
      questionText: "5)	Which of the following is one of the three types of analysis of pedagogy in education?",
      answerOptions: [
        { answerText: "Pedagogical analysis of emotions", isCorrect: false },
        { answerText: "APedagogical analysis of the subject", isCorrect: false },
        { answerText: "Pedagogical analysis of skills", isCorrect: false },
        { answerText: "Pedagogical analysis of beliefs", isCorrect: true },
      ],
    },
    {
      questionText: "6)	In a class mixed with boys and girls. What should you do to improve their cooperation?",
      answerOptions: [
        { answerText: "Making them share a bench ", isCorrect: false },
        { answerText: "Talk about equality in lessons", isCorrect: false },
        { answerText: "Asking parents to discuss equality ", isCorrect: false },
        { answerText: "Setting up tasks which have to be done together", isCorrect: true },
      ],
    },
    {
      questionText: "7)	Which of the following is NOT part of the five E’s of Constructivism",
      answerOptions: [
        { answerText: "Elaborate", isCorrect: false },
        { answerText: "Enjoy", isCorrect: true },
        { answerText: "Engage", isCorrect: false },
        { answerText: "Explore", isCorrect: false },
      ],
    },
    {
      questionText: "8)	What is the stage in which a child begins to think logically about objects and events?",
      answerOptions: [
        { answerText: "Pre-Operational Stage", isCorrect: false },
        { answerText: "Sensory-Motor Stage", isCorrect: false },
        { answerText: "Formal Operational Stage", isCorrect: false },
        { answerText: "Concrete Operational Stage", isCorrect: true },
      ],
    },
    {
      questionText: "9)	The main purpose of the supervision of teaching should be:",
      answerOptions: [
        { answerText: "Advancement of pupil welfare", isCorrect: true },
        { answerText: "Carrying out the curriculum", isCorrect: false },
        { answerText: "Achievement of success in exams", isCorrect: false },
        { answerText: "Proper utilization of facilities", isCorrect: false },
      ],
    },
    {
      questionText: "10)	What is the most effective method of correcting an unwanted behavior of a student?",
        answerOptions: [
        { answerText: "Find out the reason for their behavior and then suggest measures for improvement", isCorrect: true },
        { answerText: "Yell at them ", isCorrect: false },
        { answerText: "Ignore them", isCorrect: false },
        { answerText: "Humiliate them in class", isCorrect: false },
      ],
    },
    {
      questionText: "11)	What is the major purpose of a periodic parent-teacher interaction?",
        answerOptions: [
        { answerText: "Develop a social relationship with each other", isCorrect: false },
        { answerText: "Discuss the child’s strengths and weaknesses for reinforcement and improvement", isCorrect: true },
        { answerText: "Share information about their personal lives", isCorrect: false },
        { answerText: "Highlight each other’s shortcomings", isCorrect: false },
      ],
    },
    {
      questionText: "12)	Which of the following methods of teaching will encourage indirect learning?",
        answerOptions: [
        { answerText: "Collaborative projects", isCorrect: true },
        { answerText: "Team teaching", isCorrect: false },
        { answerText: "Lecturing with examples", isCorrect: false },
        { answerText: "Demonstration on a subject", isCorrect: false },
      ],
    },
    {
      questionText: "13)	A scoring guide use to evaluate the quality of students is known as a:",
        answerOptions: [
        { answerText: "Inventory", isCorrect: false },
        { answerText: "Rating Scale", isCorrect: false },
        { answerText: "Checklist", isCorrect: false },
        { answerText: "Rubric", isCorrect: true },
      ],
    },
    {
      questionText: "14)	What do you call the document that guides and outlines the lessons and topics of a course?",
        answerOptions: [
        { answerText: "Syllabus", isCorrect: true },
        { answerText: "Curriculum", isCorrect: false },
        { answerText: "Content", isCorrect: false },
        { answerText: "Objectives", isCorrect: false },
      ],
    },
    {
      questionText: "15)	In Bloom’s taxonomy of learning, which of the following is NOT included in the three learning domains?",
        answerOptions: [
        { answerText: "Psychomotor", isCorrect: false },
        { answerText: "Associative", isCorrect: true },
        { answerText: "Affective", isCorrect: false },
        { answerText: "Cognitive", isCorrect: false },
      ],
    },
    {
      questionText: "16)	What do you call the assessment that measures a student's current knowledge and discovers the students' difficulties while learning and assess the problem accurately?",
        answerOptions: [
        { answerText: "Summative Assessment", isCorrect: false },
        { answerText: "Contemporary Assessment", isCorrect: false },
        { answerText: "Diagnostic Assessment", isCorrect: true },
        { answerText: "Formative Assessment", isCorrect: false },
      ],
    },
    {
      questionText: "17)	Which of the following is undesirable in a questionnaire?",
        answerOptions: [
        { answerText: "Simplest possible wording and suitable vocabulary", isCorrect: false },
        { answerText: "Asking for unnecessary information that lengthens the questionnaire", isCorrect: true },
        { answerText: "Avoiding questions which the subjects will not answer or will not answer truthfully", isCorrect: false },
        { answerText: "Avoiding ambiguity in questions", isCorrect: false },
      ],
    },
    {
      questionText: "18)	What is the aim of educational research?",
        answerOptions: [
        { answerText: "Identifying the values that need to be inculcated in the pupils", isCorrect: false },
        { answerText: "Identifying major problems that need to be solved", isCorrect: false },
        { answerText: "Identifying the aims of education", isCorrect: false },
        { answerText: "Searching for the new facts and principles underlying the process of education", isCorrect: true },
      ],
    },
    {
      questionText:"19)	Which is the best technique of measuring the internal feelings of a student?",
        answerOptions: [
        { answerText: "Interview", isCorrect: true },
        { answerText: "Sociometry", isCorrect: false },
        { answerText: "Questionnaire", isCorrect: false },
        { answerText: "Projective technique", isCorrect: false },
      ],
    },
    {
      questionText: "20)	What do you call the factors that affect the development of curriculum?",
        answerOptions: [
        { answerText: "Curriculum Evaluation", isCorrect: false },
        { answerText: "Foundation of curriculum", isCorrect: true },
        { answerText: "Elements of curriculum", isCorrect: false },
        { answerText: "Curriculum Design", isCorrect: false },
      ],
    },
    {
      questionText: "21)	A school curriculum is best defined as:",
        answerOptions: [
        { answerText: "The organized pupil experiences set by the school", isCorrect: true },
        { answerText: "All materials and methods of instruction", isCorrect: false },
        { answerText: "All materials used to pupil activities", isCorrect: false },
        { answerText: "The complete collection of the courses of study", isCorrect: false },
      ],
    },
    {
      questionText: "22)	Which of the following is NOT implied in the theory of Multiple Intelligence",
        answerOptions: [
        { answerText: "emotional intelligence is not related to IQ", isCorrect: true },
        { answerText: "learning could be assessed through a variety of means", isCorrect: false },
        { answerText: "disciplines should be presented in a number of ways", isCorrect: false },
        { answerText: "intelligence is a distinct set of processing operations used by an individual to solve problems", isCorrect: false },
      ],
    },
    {
      questionText: "23)	What is the primary aim of educational psychology?",
        answerOptions: [
        { answerText: "To provide a theoretical framework for educational research", isCorrect: false },
        { answerText: "To provide the academic background essential for effective teaching", isCorrect: false },
        { answerText: "To provide the teacher with a greater appreciation of his role in the education of the child", isCorrect: false },
        { answerText: "To contribute to an understanding of sound educational practices", isCorrect: true },
      ],
    },
    {
      questionText: "24)	Introducing young readers to several types of fictional, nonfictional, and informational books will most significantly broaden their awareness of:",
        answerOptions: [
        { answerText: "important conventions of Standard English grammar", isCorrect: false },
        { answerText: "useful strategies for drafting and revising writing", isCorrect: false },
        { answerText: "practical methods for learning new vocabulary", isCorrect: false },
        { answerText: "different purposes and contexts for writing", isCorrect: true },
      ],
    },
    {
      questionText: "25)	Which of the following is NOT included in Jean Piaget’s four stages of cognitive development?",
        answerOptions: [
        { answerText: "Postoperational", isCorrect: true },
        { answerText: "Formal Operational", isCorrect: false },
        { answerText: "Concrete Operational ", isCorrect: false },
        { answerText: "Preoperational", isCorrect: false },
      ],
    },
    {
      questionText: "26)	What is the function of a workshop?",
        answerOptions: [
        { answerText: "Discussing one’s work", isCorrect: false },
        { answerText: "Hand-on learning experience", isCorrect: true },
        { answerText: "Listening to scholarly lectures", isCorrect: false },
        { answerText: "Writing down notes for class", isCorrect: false },
      ],
    },
    {
      questionText: "27)	A teacher’s failure to communicate their lesson well to students may result in:",
        answerOptions: [
        { answerText: "Loss of student’s interest", isCorrect: false },
        { answerText: "Increased number of absentees in class", isCorrect: false },
        { answerText: "Classroom indiscipline", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
      ],
    },
    {
      questionText: "28)	What is the correct sequence of Henry Clay Morrison’s five step teaching model? I. Presentation II. Exploration III. Organization IV. Assimilation V. Recitation ",
        answerOptions: [
        { answerText: "IV, V, III, I, II", isCorrect: false },
        { answerText: "II, I, IV, III, V", isCorrect: true },
        { answerText: "II, I, III, IV, V", isCorrect: false },
        { answerText: "I, II, III, IV, V", isCorrect: false },
      ],
    },
    {
      questionText: "29)	When the development of the same subject is studied over a period of time, the study is called a:",
        answerOptions: [
        { answerText: "Longitudinal Study", isCorrect: true },
        { answerText: "Survey Study", isCorrect: false },
        { answerText: "Cross-sectional Study", isCorrect: false },
        { answerText: "Life History Study", isCorrect: false },
      ],
    },
    {
      questionText: "30)	Repeatedly asking children to engage in learning activities either to avoid punishment or to gain a reward would:",
        answerOptions: [
        { answerText: "increase their intrinsic motivation", isCorrect: false },
        { answerText: "decrease their natural interest and curiosity involved in learning", isCorrect: true },
        { answerText: "decrease their extrinsic motivation", isCorrect: false },
        { answerText: "encourage them to focus on mastery rather than performance goals", isCorrect: false },
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
