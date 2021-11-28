import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default function BASecondEd() {
  const questions = [
    {
      questionText: "1)	At the end of periodical examination, Teacher Ralph administered a summative test in Filipino. After scoring the test papers she assigned grades to each test score such as 95, 90, 85, 80 etc. What process did Teacher Ralph use?",
      answerOptions: [
        { answerText: "Measurement", isCorrect: false },
        { answerText: "Computation", isCorrect: true },
        { answerText: "Evaluation", isCorrect: false },
        { answerText: "Ranking", isCorrect: false },
      ],
    },
    {
      questionText: "2)	What is the theory that supports this statement? “If I have to give reinforcement, it has to be given immediately after the response.”",
      answerOptions: [
        { answerText: "Cognitive Theory", isCorrect: false },
        { answerText: "Operant Conditioning Theory", isCorrect: true },
        { answerText: "Humanist Theory", isCorrect: false },
        { answerText: "Social Cognitive Theory", isCorrect: false },
      ],
    },
    {
      questionText: "3)	If you want to teach concepts, patterns, and abstractions. Which method is most appropriate to use?",
      answerOptions: [
        { answerText: "Direct Instruction", isCorrect: false },
        { answerText: "Deductive Method", isCorrect: false },
        { answerText: "Indirect Instruction", isCorrect: true },
        { answerText: "Problem Solving", isCorrect: false },
      ],
    },
    {
      questionText: "4)	Which of these is NOT an indicator of a supportive learning environment?",
      answerOptions: [
        { answerText: "Warm and friendly atmosphere ", isCorrect: false },
        { answerText: "High drop-out rates", isCorrect: true },
        { answerText: "Increase in student bonding activities in school", isCorrect: false },
        { answerText: "Students take personal responsibility for their learning and behavior", isCorrect: false },
      ],
    },
    {
      questionText: "5)	What can the teachers in one school do to maximize their community resources to ensure that effective instruction is employed at all times?",
      answerOptions: [
        { answerText: "Request the school to purchase materials.", isCorrect: false },
        { answerText: "Let a company/agency sponsor the building of a resource center", isCorrect: false },
        { answerText: "Require students to bring materials for their teacher.", isCorrect: false },
        { answerText: "Have a learning resource center of materials prepared by teachers.", isCorrect: true },
      ],
    },
    {
      questionText: "6)	After scoring a quiz, Teacher Gina got the difference of the highest and lowest scores in each class. What did she compute?",
      answerOptions: [
        { answerText: "Mean ", isCorrect: false },
        { answerText: "Median", isCorrect: false },
        { answerText: "Standard Deviation ", isCorrect: false },
        { answerText: "Range", isCorrect: true },
      ],
    },
    {
      questionText: "7)	Analytic scoring uses the _____ judgement of the student’s work.",
      answerOptions: [
        { answerText: "Performance", isCorrect: false },
        { answerText: "Criterion", isCorrect: true },
        { answerText: "Evaluation", isCorrect: false },
        { answerText: "Standard", isCorrect: false },
      ],
    },
    {
      questionText: "8)	What should a teacher use if they want to counteract the spirit of destructive competition among their students?",
      answerOptions: [
        { answerText: "Community Involvement Projects", isCorrect: false },
        { answerText: "Listening Activities", isCorrect: false },
        { answerText: "Self-evaluation Activities", isCorrect: false },
        { answerText: "Concept Miming", isCorrect: true },
      ],
    },
    {
      questionText: "9)	When a teacher discovers that her pupils are weak in comprehension, what type of test should they use to further determine which particular skills their pupils are weak at?",
      answerOptions: [
        { answerText: "Diagnostic Test", isCorrect: true },
        { answerText: "Standardized Test", isCorrect: false },
        { answerText: "Placement Test", isCorrect: false },
        { answerText: "Aptitude Test", isCorrect: false },
      ],
    },
    {
      questionText: "10)	Bruner’s theory on intellectual development moves from enactive to iconic and symbolic stages. Applying Bruner’s how should you teach?",
        answerOptions: [
        { answerText: "Begin with the concrete.", isCorrect: true },
        { answerText: "Begin with the abstract.", isCorrect: false },
        { answerText: "Be interactive in approach.", isCorrect: false },
        { answerText: "Do direct instruction.", isCorrect: false },
      ],
    },
    {
      questionText: "11)	Article XIII of the Code of Ethics stipulates that the evaluation of the learner’s work should be based on merit and quality of academic _____.",
        answerOptions: [
        { answerText: "Evaluation", isCorrect: false },
        { answerText: "Performance", isCorrect: true },
        { answerText: "Results", isCorrect: false },
        { answerText: "Marks", isCorrect: false },
      ],
    },
    {
      questionText: "12)	A student gave a wrong answer in class then suddenly the teacher says “You are wrong! Your answer was way off.” As a consequence, other students in the class were afraid to answer questions. Which of the following is illustrated by the event?",
        answerOptions: [
        { answerText: "Ripple effect", isCorrect: true },
        { answerText: "Halo effect", isCorrect: false },
        { answerText: "Central tendency error", isCorrect: false },
        { answerText: "Severity error", isCorrect: false },
      ],
    },
    {
      questionText: "13)	Which is a selective reading technique meant at getting specific important facts very fast?",
        answerOptions: [
        { answerText: "Skimming", isCorrect: false },
        { answerText: "Silent Reading", isCorrect: false },
        { answerText: "Oral Reading", isCorrect: false },
        { answerText: "Scanning", isCorrect: true },
      ],
    },
    {
      questionText: "14)	Institutions of learning are required to meet the minimum standards for state recognition but are encouraged to set higher standards of quality over and above the minimum through _____ as provided in Educational Act of 1982.",
        answerOptions: [
        { answerText: "voluntary accreditation", isCorrect: true },
        { answerText: "academic freedom", isCorrect: false },
        { answerText: "lifelong education", isCorrect: false },
        { answerText: "formal education", isCorrect: false },
      ],
    },
    {
      questionText: "15)	Which will be the most authentic assessment tool for an instructional objective on working with and relating to people?",
        answerOptions: [
        { answerText: "Home visitation", isCorrect: false },
        { answerText: "Organizing a community project", isCorrect: true },
        { answerText: "Writing articles on working relating to people", isCorrect: false },
        { answerText: "Conducting a mock election", isCorrect: false },
      ],
    },
    {
      questionText: "16)	Which is one characteristic of an effective classroom management?",
        answerOptions: [
        { answerText: "It respects cultural norms of a limited group students", isCorrect: false },
        { answerText: "Strategies are simple enough to be used consistently.", isCorrect: false },
        { answerText: "It quickly and unobtrusively redirects misbehavior once it occurs.", isCorrect: true },
        { answerText: "It teaches dependence on others for self-control.", isCorrect: false },
      ],
    },
    {
      questionText: "17)	Which of the following techniques of curriculum implementation is fit to the objective of developing cooperative learning and social interaction?",
        answerOptions: [
        { answerText: "Individual Reporting", isCorrect: false },
        { answerText: "Buzz Session", isCorrect: true },
        { answerText: "Graded Recitation", isCorrect: false },
        { answerText: "Lecture", isCorrect: false },
      ],
    },
    {
      questionText: "18)	What is the initial step that a homeroom adviser must do at the beginning of the class?",
        answerOptions: [
        { answerText: "Prepare a seat plan", isCorrect: false },
        { answerText: "Memorize the names of the students", isCorrect: false },
        { answerText: "Secure the class list", isCorrect: false },
        { answerText: "Get to know each member of the class", isCorrect: true },
      ],
    },
    {
      questionText:"19)	As a pioneer in the world ideas, what would be the teacher’s task?",
        answerOptions: [
        { answerText: "Leading children to acquire about their environment", isCorrect: true },
        { answerText: "Articulating social, political, and economic traditions", isCorrect: false },
        { answerText: "Establishing standards of behavior", isCorrect: false },
        { answerText: "Establishing instructional goals", isCorrect: false },
      ],
    },
    {
      questionText: "20)	A teacher was found to be giving high grades to pupils who attend her church and low grades to those who are not. What human right is she violating?",
        answerOptions: [
        { answerText: "Right to work", isCorrect: false },
        { answerText: "Right to worship", isCorrect: true },
        { answerText: "Right of expression", isCorrect: false },
        { answerText: "Right to life", isCorrect: false },
      ],
    },
    {
      questionText: "21)	In a criterion-referenced testing, what must a teacher do to ensure that the test is fair?",
        answerOptions: [
        { answerText: "Use the objectives for the units as guide in your test construction.", isCorrect: true },
        { answerText: "Make twenty questions but ask the students to answer only ten of their choice.", isCorrect: false },
        { answerText: "Ask each student to contribute one question.", isCorrect: false },
        { answerText: "Make all of the questions true or false.", isCorrect: false },
      ],
    },
    {
      questionText: "22)	If a teacher plans a constructivist lesson, what will he most likely do?",
        answerOptions: [
        { answerText: "Plan how he can engage his students in convergent thinking", isCorrect: true },
        { answerText: "Plan how he can do reciprocal teaching", isCorrect: false },
        { answerText: "Plan how he can evaluate his students’ work", isCorrect: false },
        { answerText: "Plan how he can lecture to his students", isCorrect: false },
      ],
    },
    {
      questionText: "23)	Which of the following tests are used to direct measures of competence?",
        answerOptions: [
        { answerText: "Performance tests", isCorrect: false },
        { answerText: "Paper-and-pencil tests", isCorrect: false },
        { answerText: "Personality tests", isCorrect: false },
        { answerText: "Standardized test", isCorrect: true },
      ],
    },
    {
      questionText: "24)	In which of the following situations does a teacher formulate low level questions?",
        answerOptions: [
        { answerText: "important conventions of Standard English grammar", isCorrect: false },
        { answerText: "useful strategies for drafting and revising writing", isCorrect: false },
        { answerText: "practical methods for learning new vocabulary", isCorrect: false },
        { answerText: "when they want their students to retrieve facts", isCorrect: true },
      ],
    },
    {
      questionText: "25)	 The graduating students need information regarding future occupation where they will most likely succeed. What kind of test will the guidance counselor administer?",
        answerOptions: [
        { answerText: "Aptitude test", isCorrect: true },
        { answerText: "Attitude test", isCorrect: false },
        { answerText: "Achievement test ", isCorrect: false },
        { answerText: "Survey test", isCorrect: false },
      ],
    },
    {
      questionText: "26)	What is the first and perhaps the most important step which a teacher should take in constructing a test?",
        answerOptions: [
        { answerText: "Prepare the table of specification", isCorrect: false },
        { answerText: "Know the objectives", isCorrect: true },
        { answerText: "Write the preliminary draft of the test", isCorrect: false },
        { answerText: "Look over the old test questions", isCorrect: false },
      ],
    },
    {
      questionText: "27)	Which of the following is NOT a characteristic of Multicultural education?",
        answerOptions: [
        { answerText: "Pedagogically humanistic", isCorrect: false },
        { answerText: "Personality empowering", isCorrect: false },
        { answerText: "Socially transformative", isCorrect: false },
        { answerText: "Culturally discriminating", isCorrect: true },
      ],
    },
    {
      questionText: "28)	In what strands of the four pillars of education implies a shift from skill to competence, or a mix higher-order skills specific to each individual?",
        answerOptions: [
        { answerText: "Learning to Be", isCorrect: false },
        { answerText: "Learning to Do", isCorrect: true },
        { answerText: "Learning to Know", isCorrect: false },
        { answerText: "Learning to See", isCorrect: false },
      ],
    },
    {
      questionText: "29)	What is the kind of education that emphasizes human-earth relationships and fosters a vision of education for sustainable development to build a global culture of ecological responsibility?",
        answerOptions: [
        { answerText: "Environmental Education", isCorrect: true },
        { answerText: "Global Education", isCorrect: false },
        { answerText: "Human Rights Education", isCorrect: false },
        { answerText: "Development Education", isCorrect: false },
      ],
    },
    {
      questionText: "30)	 In the context of the six facets of understanding cited by Wiggins and McTighe, what is a proof of a student’s understanding a principle?",
        answerOptions: [
        { answerText: "repeating the principle given by the teacher", isCorrect: false },
        { answerText: "applying the principle to solve a problem", isCorrect: true },
        { answerText: "stating the principle from memory", isCorrect: false },
        { answerText: "memorizing the principle", isCorrect: false },
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
