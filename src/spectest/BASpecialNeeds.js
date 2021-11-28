import React, { useState } from "react";
import "./Specialized.css";

import { Link } from "react-router-dom";
export default function BASpecialNeeds() {
  const questions = [
    {
      questionText: "1)	What do you call the practice of fully integrating all students into classroom instruction regardless of race, gender, religion, socioeconomic status, ethnicity, physical or mental ability, or language?",
      answerOptions: [
        { answerText: "Awareness", isCorrect: false },
        { answerText: "Inclusion", isCorrect: true },
        { answerText: "Exclusion", isCorrect: false },
        { answerText: "Differentiated Instruction", isCorrect: false },
      ],
    },
    {
      questionText: "2)	One of the major goals of early childhood is to facilitate child development for young children through developmentally appropriate strategies in intentional and purposeful ways. A young child with speech delays would most benefit from which of the following strategies?",
      answerOptions: [
        { answerText: "Receiving individual therapy in the speech room", isCorrect: false },
        { answerText: "Receiving therapy in the classroom", isCorrect: true },
        { answerText: "Receiving group therapy in the speech room", isCorrect: false },
        { answerText: "Receiving one-on-one therapy on a weekly basis", isCorrect: false },
      ],
    },
    {
      questionText: "3)	Which of the following disabilities is characterized primarily by impairments in social perception, interactions, and nonverbal communication, but no cognitive delays?",
      answerOptions: [
        { answerText: "ADHD", isCorrect: false },
        { answerText: "Williams Syndrome", isCorrect: false },
        { answerText: "Asperger Syndrome", isCorrect: true },
        { answerText: "Pervasive Developmental Disorder", isCorrect: false },
      ],
    },
    {
      questionText: "4)	Which of the following sets of symptoms typically distinguishes psychotic disorders from other types of emotional disturbances?",
      answerOptions: [
        { answerText: "Mood Swings and Panic Attacks", isCorrect: false },
        { answerText: "Delusions and Hallucinations", isCorrect: true },
        { answerText: "Social phobia and pervasive feelings of unhappiness", isCorrect: false },
        { answerText: "Persistent Anxiety and repetitive, ritualistic behaviors", isCorrect: false },
      ],
    },
    {
      questionText: "5)	A teacher asks her class to cover sharp edges of furniture with cotton and use ’Touch and Feel’ notice boards and books. The needs of which category of special learners is she attempting to cater to?",
      answerOptions: [
        { answerText: "Socially disadvantaged learners", isCorrect: false },
        { answerText: "Cognitive impaired learners", isCorrect: false },
        { answerText: "Hearing impaired learners", isCorrect: false },
        { answerText: "Visually impaired learners", isCorrect: true },
      ],
    },
    {
      questionText: "6)	Gifted children are best catered to by educational programs that:",
      answerOptions: [
        { answerText: "control their aggressive behavior", isCorrect: false },
        { answerText: "make use of gifts and rewards to motivate them to perform according to minimum standards of learning", isCorrect: false },
        { answerText: "emphasize mastery of knowledge by recall ", isCorrect: false },
        { answerText: "stimulate their thinking and give them opportunities to engage in divergent thinking", isCorrect: true },
      ],
    },
    {
      questionText: "7)	The speech dysfluency of stuttering most frequently has a detrimental effect on a child's:",
      answerOptions: [
        { answerText: "feeling of autonomy ", isCorrect: false },
        { answerText: "sense of self-worth", isCorrect: true },
        { answerText: "reading comprehension skills", isCorrect: false },
        { answerText: "written language skills", isCorrect: false },
      ],
    },
    {
      questionText: "8)	Developmental delay and cognitive impairment, along with eyes that are smaller than average, a poorly developed upper lip, and flattened cheekbones, are typical of children with",
      answerOptions: [
        { answerText: "Muscular Dystrophy", isCorrect: false },
        { answerText: "Cerebral Palsy", isCorrect: false },
        { answerText: "Cystic Fibrosis", isCorrect: false },
        { answerText: "Fetal Alcohol Syndrome", isCorrect: true },
      ],
    },
    {
      questionText: "9)	A child with fine-motor impairments will likely have the most difficulty performing which of the following tasks?",
      answerOptions: [
        { answerText: "Drawing a picture", isCorrect: true },
        { answerText: "Kicking a ball", isCorrect: false },
        { answerText: "Reading a story", isCorrect: false },
        { answerText: "Carrying a book", isCorrect: false },
      ],
    },
    {
      questionText: "10)	A child with normal intelligence shows difficulty in reading and comprehending language. It indicates that the child is showing symptoms of:",
        answerOptions: [
        { answerText: "Dyslexia", isCorrect: true },
        { answerText: "Dyscalculia", isCorrect: false },
        { answerText: "Dyspraxia", isCorrect: false },
        { answerText: "Dysgraphia ", isCorrect: false },
      ],
    },
    {
      questionText: "11)	Children raised in a family environment with a high level of discord and social dysfunction are typically at a significantly greater risk of experiencing:",
        answerOptions: [
        { answerText: "expressive language disorders", isCorrect: false },
        { answerText: "anxiety disorders", isCorrect: true },
        { answerText: "receptive language disorders", isCorrect: false },
        { answerText: "autistic spectrum disorders", isCorrect: false },
      ],
    },
    {
      questionText: "12)	A child who has been diagnosed with an absence seizure disorder is most likely to experience:",
        answerOptions: [
        { answerText: "brief interruptions in awareness", isCorrect: true },
        { answerText: "delays in motor skill development", isCorrect: false },
        { answerText: "episodes of aggressive behavior", isCorrect: false },
        { answerText: "permanent neurological impairment", isCorrect: false },
      ],
    },
    {
      questionText: "13)	Of the following conditions that affect learning and development, which one occurs as the result of brain damage to a child during pregnancy, birth, or early infancy?",
        answerOptions: [
        { answerText: "Down Syndrome", isCorrect: false },
        { answerText: "Fragile X syndrome", isCorrect: false },
        { answerText: "Dyslexia", isCorrect: false },
        { answerText: "Cerebral Palsy", isCorrect: true },
      ],
    },
    {
      questionText: "14)	Which of the following best describes the primary purpose of an Individualized Family Service Plan (IFSP) for a child with special needs?",
        answerOptions: [
        { answerText: "to establish and address flexible priorities for the child's development across all domains", isCorrect: true },
        { answerText: "to document instructional interventions that the child's parents have implemented", isCorrect: false },
        { answerText: "to outline how assistive technology can be used to improve the child's academic experience", isCorrect: false },
        { answerText: "to assess how the child's developmental delays affect current educational performance", isCorrect: false },
      ],
    },
    {
      questionText: "15)	A child diagnosed with childhood-onset pervasive developmental disorder exhibits aggressive and violent behaviors toward herself and others. By law, a child with this diagnosis and who exhibits these behaviors:",
        answerOptions: [
        { answerText: "must be placed in an alternative setting at the family's expense", isCorrect: false },
        { answerText: "must be placed in the least restrictive environment", isCorrect: true },
        { answerText: "must be supervised by an aide at all times in a classroom", isCorrect: false },
        { answerText: "must be educated within the public-school setting", isCorrect: false },
      ],
    },
    {
      questionText: "16)	Reducing the time allotted to complete an assignment to make it coincide with time of attention and increasing this time in a phased manner will be best suited to deal with which of the following disorders?",
        answerOptions: [
        { answerText: "Dysphasia", isCorrect: false },
        { answerText: "Disruptive Integration Disorder", isCorrect: false },
        { answerText: "Attention Deficit Hyperactivity Disorder", isCorrect: true },
        { answerText: "Disruptive Behavior Disorder", isCorrect: false },
      ],
    },
    {
      questionText: "17)	Which of the following is the most appropriate method to monitor the progress of children with learning disabilities?",
        answerOptions: [
        { answerText: "Anecdotal Records", isCorrect: false },
        { answerText: "Structured Behavioral Observation", isCorrect: true },
        { answerText: "Behavior Rating Scale", isCorrect: false },
        { answerText: "Case Study", isCorrect: false },
      ],
    },
    {
      questionText: "18)	Which of the following is the most appropriate method to monitor the progress of children with learning disabilities?",
        answerOptions: [
        { answerText: "encouraging these children to define their own goals as soon as possible", isCorrect: false },
        { answerText: "focusing on the weaknesses of such students", isCorrect: false },
        { answerText: "maintaining high expectations from such students", isCorrect: false },
        { answerText: "teaching a variety of skills and strategies that can be applied across a range of contexts", isCorrect: true },
      ],
    },
    {
      questionText:"19)	What is the disability of a child who is unable to write constantly along with clumsy handwriting?",
        answerOptions: [
        { answerText: "Dysgraphia", isCorrect: true },
        { answerText: "Dyslexia", isCorrect: false },
        { answerText: "ADHD", isCorrect: false },
        { answerText: "Dyscalculia", isCorrect: false },
      ],
    },
    {
      questionText: "20)	A student who has an emotional behavioral disability is likely to have the most difficulty with which of the following aspects of communication development?",
        answerOptions: [
        { answerText: "Using syntax patterns that are grammatically correct", isCorrect: false },
        { answerText: "Interpreting a speaker’s feelings from his or her tone of voice", isCorrect: true },
        { answerText: "Understanding a new vocabulary words in context", isCorrect: false },
        { answerText: "Producing fluent speech that is free of articulation errors", isCorrect: false },
      ],
    },
    {
      questionText: "21)	If a student who has epilepsy suddenly experiences a seizure in class, what should the teacher do first?",
        answerOptions: [
        { answerText: "Remove objects located around or near the student that could possibly cause injury.", isCorrect: true },
        { answerText: "Place an object such as a belt or wallet in the student’s mouth to keep the airway open.", isCorrect: false },
        { answerText: "Attempt to gently restrain the student to minimize muscle jerks.", isCorrect: false },
        { answerText: "Call or locate the school nurse to attend to the student.", isCorrect: false },
      ],
    },
    {
      questionText: "22)	Which of the following factors causes Down syndrome?",
        answerOptions: [
        { answerText: "Chromosomal abnormality", isCorrect: true },
        { answerText: "Neural tube defects", isCorrect: false },
        { answerText: "Prenatal exposure to high amounts of alcohol", isCorrect: false },
        { answerText: "Oxygen deprivation during the birthing process", isCorrect: false },
      ],
    },
    {
      questionText: "23)	Which of the following activities would likely be most difficult for an eight-year-old student with a mild intellectual disability?",
        answerOptions: [
        { answerText: "Matching two similar objects together", isCorrect: false },
        { answerText: "Recognizing the letters within his or her first name", isCorrect: false },
        { answerText: "Following basic two-step oral directions", isCorrect: false },
        { answerText: "Using a previously learned skill in a new setting", isCorrect: true },
      ],
    },
    {
      questionText: "24)	Which of the following is NOT a characteristic of inclusive education?",
        answerOptions: [
        { answerText: "It seeks to maximize the potential of all students", isCorrect: false },
        { answerText: "Inclusive education is a continuous process, not an achieved state or product", isCorrect: false },
        { answerText: "It is the shift in service from the care of disabled children to their education and personal development", isCorrect: false },
        { answerText: "It enhances learning only for students with special needs", isCorrect: true },
      ],
    },
    {
      questionText: "25)	Which of the following approaches suggests interaction of the child with the people around him and with social institutions to deal with disruptive behavior disorder?",
        answerOptions: [
        { answerText: "Ecological", isCorrect: true },
        { answerText: "Behavioral", isCorrect: false },
        { answerText: "Biological ", isCorrect: false },
        { answerText: "Psychodynamic", isCorrect: false },
      ],
    },
    {
      questionText: "26)	A child with a learning disability in motor skills is called:",
        answerOptions: [
        { answerText: "Dyslexia", isCorrect: false },
        { answerText: "Dyspraxia", isCorrect: true },
        { answerText: "Dysphasia", isCorrect: false },
        { answerText: "Dyscalculia", isCorrect: false },
      ],
    },
    {
      questionText: "27)	The major frustration that children with hearing loss face in the classroom is:",
        answerOptions: [
        { answerText: "The inability to read the prescribed textbook", isCorrect: false },
        { answerText: "The inability to participate in sports and games", isCorrect: false },
        { answerText: "The inability to take examinations with other students", isCorrect: false },
        { answerText: "The inability to communicate or share information with others", isCorrect: true },
      ],
    },
    {
      questionText: "28)	Learning disabled children differ from mentally retarded children in that:",
        answerOptions: [
        { answerText: "They have difficulty learning in one area", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
        { answerText: "They usually have average above intelligence", isCorrect: false },
        { answerText: "They are able to learn in most areas", isCorrect: false },
      ],
    },
    {
      questionText: "29)	An IQ range of 20-35 would indicate what degree of retardation?",
        answerOptions: [
        { answerText: "Severe", isCorrect: true },
        { answerText: "Profound", isCorrect: false },
        { answerText: "Mild", isCorrect: false },
        { answerText: "Moderate", isCorrect: false },
      ],
    },
    {
      questionText: "30)	What is the meaning of ASD?",
        answerOptions: [
        { answerText: "Autism system disorder", isCorrect: false },
        { answerText: "Autism spectrum disorder", isCorrect: true },
        { answerText: "Autism special disorder", isCorrect: false },
        { answerText: "Autism syndrome disorder", isCorrect: false },
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
