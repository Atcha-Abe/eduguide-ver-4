import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default function BAChildEd() {
  const questions = [
    {
      questionText: "1)	Which of the following activities best promotes mathematical understanding among preschool children?",
      answerOptions: [
        { answerText: "Learning about the Calendar", isCorrect: false },
        { answerText: "Sorting objects in a variety of ways and talking about how they are sorted", isCorrect: true },
        { answerText: "Naming geometric shapes that can be found around the room and drawing pictures of them", isCorrect: false },
        { answerText: "Counting by one to ten on a daily basis", isCorrect: false },
      ],
    },
    {
      questionText: "2)	In preparing a curriculum for the optimal development of infants under ten months, the teacher should provide:",
      answerOptions: [
        { answerText: "Riding toys for outside play", isCorrect: false },
        { answerText: "Soft mats and blocks for rolling, climbing, and tumbling", isCorrect: true },
        { answerText: "Musical swings for movement", isCorrect: false },
        { answerText: "Video game consoles", isCorrect: false },
      ],
    },
    {
      questionText: "3)	Bronfenbrenner’s theory of an ecological context of child development helps early childhood educators focus on the ____________.",
      answerOptions: [
        { answerText: "Child and family context", isCorrect: false },
        { answerText: "Child and family within the educational context", isCorrect: false },
        { answerText: "Child’s biological, immediate socioeconomic, and social cultural context", isCorrect: true },
        { answerText: "Educational context within society", isCorrect: false },
      ],
    },
    {
      questionText: "4)	David Elkind’s description of “hurried child” syndrome has led to an increased awareness in early childhood education of the:",
      answerOptions: [
        { answerText: "Measurement of academic performance through formal assessment ", isCorrect: false },
        { answerText: "Importance of play rather than formal academics", isCorrect: true },
        { answerText: "Need for highly structured and predictable classroom environments", isCorrect: false },
        { answerText: "Importance of formal public schooling beginning at a very early age", isCorrect: false },
      ],
    },
    {
      questionText: "5)	When does most of a child's brain development occur?",
      answerOptions: [
        { answerText: "Ages 6-12", isCorrect: false },
        { answerText: "Ages 13-15", isCorrect: false },
        { answerText: "Ages 16-17", isCorrect: false },
        { answerText: "Ages 0-5", isCorrect: true },
      ],
    },
    {
      questionText: "6)	Social collaboration is important for young children. Collaborative use of technology motivates children to be which of the following?",
      answerOptions: [
        { answerText: "Skilled technicians", isCorrect: false },
        { answerText: "Good spellers", isCorrect: false },
        { answerText: "Rote memorizers", isCorrect: false },
        { answerText: "Active and involved learners", isCorrect: true },
      ],
    },
    {
      questionText: "7)	What does the physical process in early child development focus on?",
      answerOptions: [
        { answerText: "Development of language and all mental activities", isCorrect: false },
        { answerText: "Small muscle control and coordination", isCorrect: true },
        { answerText: "Emotional communication and control", isCorrect: false },
        { answerText: "Critical thinking skills", isCorrect: false },
      ],
    },
    {
      questionText: "8)	According to the psychoanalytic theory of play:",
      answerOptions: [
        { answerText: "play becomes a vehicle for expending extra energy.", isCorrect: false },
        { answerText: "play helps children practice skills necessary for adult life.", isCorrect: false },
        { answerText: "play is used to replenish children’s energy", isCorrect: false },
        { answerText: "play provides an opportunity for children to gain gratification", isCorrect: true },
      ],
    },
    {
      questionText: "9)	The distinction between appearance and reality is drawn for the first time in which stage of psychological development?",
      answerOptions: [
        { answerText: "Early Childhood", isCorrect: true },
        { answerText: "Infancy", isCorrect: false },
        { answerText: "Toddlerhood", isCorrect: false },
        { answerText: "Middle Childhood", isCorrect: false },
      ],
    },
    {
      questionText: "10)	When young children talk about how they are playing, they are:",
        answerOptions: [
        { answerText: "Metacommunicating", isCorrect: true },
        { answerText: "Fantasizing ", isCorrect: false },
        { answerText: "Playing", isCorrect: false },
        { answerText: "Arguing", isCorrect: false },
      ],
    },
    {
      questionText: "11)	In a class of three-year-olds, which of the following would be the teacher's best strategy for fostering the development of the fine-motor skills prerequisite for writing?",
        answerOptions: [
        { answerText: "involving children in singing activities in which they clap the rhythms of the songs", isCorrect: false },
        { answerText: "engaging children in activities such as doing fingerplays and playing with interlocking blocks and beads", isCorrect: true },
        { answerText: "engaging children in art activities such as fingerpainting and making prints of their hands in plaster", isCorrect: false },
        { answerText: "providing children with thick pencils to use to trace the outlines of letters and shapes", isCorrect: false },
      ],
    },
    {
      questionText: "12)	A first-grade teacher is planning an art activity in which students will explore texture. Which of the following activities would best foster students' understanding of this visual art concept?",
        answerOptions: [
        { answerText: "Crayon rubbing", isCorrect: true },
        { answerText: "Sketching", isCorrect: false },
        { answerText: "Cutting and pasting", isCorrect: false },
        { answerText: "Easel painting", isCorrect: false },
      ],
    },
    {
      questionText: "13)	In terms of student safety, which of the following features of a school playground should a kindergarten teacher be most concerned about?",
        answerOptions: [
        { answerText: "The playing area includes a blacktop made of asphalt.", isCorrect: false },
        { answerText: "The platform at the top of the slide is five feet high.", isCorrect: false },
        { answerText: "The swings do not provide back support", isCorrect: false },
        { answerText: "The surface below the climbing structure consists of packed earth.", isCorrect: true },
      ],
    },
    {
      questionText: "14)	According to Abraham Maslow, a child who frequently comes to school hungry, tired, and dressed in dirty clothes has which of the following unmet needs?",
        answerOptions: [
        { answerText: "Physiological", isCorrect: true },
        { answerText: "Safety and Security", isCorrect: false },
        { answerText: "Self-Actualization", isCorrect: false },
        { answerText: "Self-Esteem", isCorrect: false },
      ],
    },
    {
      questionText: "15)	Which of the following BEST explains what children learn when they sing songs?",
        answerOptions: [
        { answerText: "They learn about the pitch of music in the song", isCorrect: false },
        { answerText: "They learn to develop listening skills", isCorrect: true },
        { answerText: "They learn how to compose their own songs", isCorrect: false },
        { answerText: "They learn how to control their voice", isCorrect: false },
      ],
    },
    {
      questionText: "16)	In a class, each student stands on a large sheet of 1-inch graph paper while a partner creates an outline of the student's foot by tracing around it. Students then count the number of squares inside each outline. This activity would best help students understand the mathematical concept of:",
        answerOptions: [
        { answerText: "Volume", isCorrect: false },
        { answerText: "Perimeter", isCorrect: false },
        { answerText: "Area", isCorrect: true },
        { answerText: "Proportion", isCorrect: false },
      ],
    },
    {
      questionText: "17)	According to Kamii’s curriculum theory, children build knowledge principally through:",
        answerOptions: [
        { answerText: "imitation of the behaviors of adults or other children", isCorrect: false },
        { answerText: "formation of mental relationships by interacting with objects, people, and events", isCorrect: true },
        { answerText: "process of trial and error", isCorrect: false },
        { answerText: "use of their five senses to differentiate information from emotions", isCorrect: false },
      ],
    },
    {
      questionText: "18)	A four-year-old child has difficulty sharing toys, taking turns, and initiating play during center time. Which of the following observational assessment tools would likely be the preschool teacher's best choice for collecting data on how often the child demonstrates the targeted behaviors?",
        answerOptions: [
        { answerText: "Rating Scale", isCorrect: false },
        { answerText: "Running Record", isCorrect: false },
        { answerText: "Skills Checklist", isCorrect: false },
        { answerText: "Event Sampling", isCorrect: true },
      ],
    },
    {
      questionText:"19)	_________________ is one of the factors that causes harmful stress to infants.",
        answerOptions: [
        { answerText: "Overstimulation", isCorrect: true },
        { answerText: "Understimulation", isCorrect: false },
        { answerText: "Consistency", isCorrect: false },
        { answerText: "Overprotection", isCorrect: false },
      ],
    },
    {
      questionText: "20)	When it comes to toy safety, important teacher responsibilities include ____.",
        answerOptions: [
        { answerText: "supervising children as they use toys", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
        { answerText: "teaching children about which safe toys to use", isCorrect: false },
        { answerText: "selecting safe toys", isCorrect: false },
      ],
    },
    {
      questionText: "21)	According to the Montessori method:",
        answerOptions: [
        { answerText: "children perform work tasks with materials that meet their developmental needs", isCorrect: true },
        { answerText: "educational experiences should be postponed until children are twelve years old.", isCorrect: false },
        { answerText: "children can learn all they need to know from nature.", isCorrect: false },
        { answerText: "before children can learn they need a strong relationship with their teacher.", isCorrect: false },
      ],
    },
    {
      questionText: "22)	In Bronfenbrenner’s organization of child development, the family or classroom is considered a:",
        answerOptions: [
        { answerText: "Microsystem", isCorrect: true },
        { answerText: "Mesosystem", isCorrect: false },
        { answerText: "Macrosystem", isCorrect: false },
        { answerText: "Chronosystem", isCorrect: false },
      ],
    },
    {
      questionText: "23)	The development of stranger anxiety in infants between seven and nine months of age is most closely linked to their:",
        answerOptions: [
        { answerText: "increased emotional sensitivity", isCorrect: false },
        { answerText: "increased visual ability", isCorrect: false },
        { answerText: "increased vocalization", isCorrect: false },
        { answerText: "increased memory", isCorrect: true },
      ],
    },
    {
      questionText: "24)	A kindergarten boy with an anxietywithdrawal disorder will most likely have difficulty in __________________.",
        answerOptions: [
        { answerText: "learning to read due to his short attention span", isCorrect: false },
        { answerText: "managing his behavior due to his poor impulse control", isCorrect: false },
        { answerText: "learning to write due to his poor physical coordination", isCorrect: false },
        { answerText: "building peer friendships due to his limited social skills", isCorrect: true },
      ],
    },
    {
      questionText: "25)	Using wordless children's books within a language arts curriculum is most effective for promoting children's:",
        answerOptions: [
        { answerText: "oral and written language skills", isCorrect: true },
        { answerText: "fine motor skills", isCorrect: false },
        { answerText: "awareness of narrative structure", isCorrect: false },
        { answerText: "emotional and social development", isCorrect: false },
      ],
    },
    {
      questionText: "26)	A group of seven-year-old children are playing a make-believe game in which they are pretending to be pirates drawing a map to buried treasure. This activity will most likely lead to the children's acquisition of knowledge by:",
        answerOptions: [
        { answerText: "improving the acuity of their senses", isCorrect: false },
        { answerText: "influencing their development of spatial reasoning", isCorrect: true },
        { answerText: "enhancing their ability to categorize", isCorrect: false },
        { answerText: "promoting the development of their gross-motor skills", isCorrect: false },
      ],
    },
    {
      questionText: "27)	The psychological process during early childhood in which children try to take on the qualities of important people in their environment is called:",
        answerOptions: [
        { answerText: "Induction", isCorrect: false },
        { answerText: "Social co-construction", isCorrect: false },
        { answerText: "Self-regulation", isCorrect: false },
        { answerText: "Identification", isCorrect: true },
      ],
    },
    {
      questionText: "28)	According to the theories of Lawrence Kohlberg, children's moral thinking develops:",
        answerOptions: [
        { answerText: "in unpredictable ways in response to several complex environmental factors", isCorrect: false },
        { answerText: "in steps, beginning with responding to external authority and moving toward respecting universal principles", isCorrect: true },
        { answerText: "in tandem with cognitive development, so progress can be predicted based on academic achievement", isCorrect: false },
        { answerText: "in emulation of their role models, so adults constitute the key influence in establishing a child's ethics and values", isCorrect: false },
      ],
    },
    {
      questionText: "29)	Which of the following play activities would be most likely to foster a five-yearold child's developing sense of empathy?",
        answerOptions: [
        { answerText: "feeding a guinea pig", isCorrect: true },
        { answerText: "constructing a hand puppet", isCorrect: false },
        { answerText: "playing music on a keyboard", isCorrect: false },
        { answerText: "building a tower with blocks", isCorrect: false },
      ],
    },
    {
      questionText: "30)	An 18-month-old child has begun to acquire one-word vocabulary at a significant rate. Which of the following language skills is this child likely to develop next?",
        answerOptions: [
        { answerText: "modifying speech to take the listener into account", isCorrect: false },
        { answerText: "using two-word sentences to identify objects and actions", isCorrect: true },
        { answerText: "recognizing different grammatical structures", isCorrect: false },
        { answerText: "responding correctly to indirect requests", isCorrect: false },
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
