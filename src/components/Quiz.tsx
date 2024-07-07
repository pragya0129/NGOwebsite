import React, { useState } from "react";
import { Card, Divider, Spinner } from "@nextui-org/react";
import { Grid, Typography, Button as MuiButton, Box } from "@mui/material";
import { Result, Button as AntButton } from "antd";

const questions = [
  {
    question: "What rights are women entitled to under the law?",
    answers: [
      { text: "Right to education", correct: false },
      { text: "Right to work", correct: false },
      { text: "Right to equal pay", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "Which organization provides free legal aid in India?",
    answers: [
      { text: "National Legal Services Authority (NALSA)", correct: true },
      { text: "Central Bureau of Investigation (CBI)", correct: false },
      { text: "Reserve Bank of India (RBI)", correct: false },
      { text: "Indian Space Research Organisation (ISRO)", correct: false },
    ],
  },
  {
    question: "What is legal awareness?",
    answers: [
      { text: "Knowledge of laws and legal rights", correct: true },
      { text: "Awareness about sports", correct: false },
      { text: "Knowledge of health practices", correct: false },
      { text: "Awareness about environmental issues", correct: false },
    ],
  },
  {
    question: "Why is legal awareness important?",
    answers: [
      { text: "Empowers individuals to seek justice", correct: true },
      { text: "Improves healthcare", correct: false },
      { text: "Promotes environmental sustainability", correct: false },
      { text: "Supports financial literacy", correct: false },
    ],
  },
  {
    question: "What does 'uplifting women' entail?",
    answers: [
      {
        text: "Improving women's education and employment opportunities",
        correct: true,
      },
      { text: "Providing financial aid", correct: false },
      { text: "Supporting environmental causes", correct: false },
      { text: "Promoting sports activities", correct: false },
    ],
  },
  {
    question: "Which of the following is a legal right for women in India?",
    answers: [
      { text: "Right to inheritance", correct: false },
      { text: "Right to vote", correct: false },
      { text: "Right to equal pay", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What is the Protection of Women from Domestic Violence Act?",
    answers: [
      { text: "A law to protect women from domestic abuse", correct: true },
      { text: "A law to protect wildlife", correct: false },
      { text: "A law to regulate internet usage", correct: false },
      { text: "A law to promote sports", correct: false },
    ],
  },
  {
    question:
      "Which international day is dedicated to women's rights and peace?",
    answers: [
      { text: "International Women's Day", correct: true },
      { text: "World Health Day", correct: false },
      { text: "Earth Day", correct: false },
      { text: "World Water Day", correct: false },
    ],
  },
  {
    question: "What does NALSA stand for?",
    answers: [
      { text: "National Legal Services Authority", correct: true },
      { text: "National Agricultural Services Authority", correct: false },
      { text: "National Aviation and Space Agency", correct: false },
      { text: "National Academy of Sports and Arts", correct: false },
    ],
  },
  {
    question: "Which of the following is a key benefit of legal education?",
    answers: [
      {
        text: "Empowers individuals with knowledge of their rights",
        correct: true,
      },
      { text: "Improves physical fitness", correct: false },
      { text: "Enhances artistic skills", correct: false },
      { text: "Promotes environmental sustainability", correct: false },
    ],
  },
  {
    question: "What is the Dowry Prohibition Act?",
    answers: [
      {
        text: "A law prohibiting the giving or taking of dowry",
        correct: true,
      },
      { text: "A law promoting women's sports", correct: false },
      { text: "A law protecting intellectual property", correct: false },
      { text: "A law regulating internet usage", correct: false },
    ],
  },
  {
    question: "Which organization works towards women's empowerment globally?",
    answers: [
      { text: "UN Women", correct: true },
      { text: "World Health Organization", correct: false },
      { text: "Greenpeace", correct: false },
      { text: "NASA", correct: false },
    ],
  },
  {
    question: "What is the role of an NGO in legal awareness?",
    answers: [
      {
        text: "Educating the public about their legal rights and responsibilities",
        correct: true,
      },
      { text: "Building roads and infrastructure", correct: false },
      { text: "Promoting tourism", correct: false },
      { text: "Regulating financial markets", correct: false },
    ],
  },
  {
    question: "What is gender equality?",
    answers: [
      { text: "Equal rights and opportunities for all genders", correct: true },
      { text: "Preference for male gender", correct: false },
      { text: "Preference for female gender", correct: false },
      { text: "Only equal pay for men and women", correct: false },
    ],
  },
  {
    question: "What is the significance of the Beti Bachao Beti Padhao scheme?",
    answers: [
      {
        text: "Promotes survival, protection, and education of the girl child",
        correct: true,
      },
      { text: "Supports agricultural development", correct: false },
      { text: "Promotes space research", correct: false },
      { text: "Encourages tourism", correct: false },
    ],
  },
  {
    question: "What is the role of the Mahila Police Volunteers?",
    answers: [
      {
        text: "To act as a link between police and community for women's safety",
        correct: true,
      },
      { text: "To promote sports among women", correct: false },
      { text: "To conduct financial audits", correct: false },
      { text: "To manage wildlife reserves", correct: false },
    ],
  },
  {
    question: "What is the significance of legal aid clinics?",
    answers: [
      { text: "Provide free legal assistance to those in need", correct: true },
      { text: "Offer medical services", correct: false },
      { text: "Promote artistic talents", correct: false },
      { text: "Manage environmental projects", correct: false },
    ],
  },
  {
    question: "What is the focus of the Women Helpline Scheme?",
    answers: [
      {
        text: "Provides 24/7 emergency response to women in distress",
        correct: true,
      },
      { text: "Offers educational scholarships", correct: false },
      { text: "Supports environmental conservation", correct: false },
      { text: "Promotes tourism", correct: false },
    ],
  },
  {
    question: "What does the term 'legal literacy' mean?",
    answers: [
      { text: "Awareness about legal rights and processes", correct: true },
      { text: "Ability to read and write", correct: false },
      { text: "Knowledge of health practices", correct: false },
      { text: "Awareness about environmental issues", correct: false },
    ],
  },
  {
    question: "What is the main objective of the Right to Education Act?",
    answers: [
      {
        text: "To provide free and compulsory education to children",
        correct: true,
      },
      { text: "To regulate internet usage", correct: false },
      { text: "To promote sports", correct: false },
      { text: "To protect wildlife", correct: false },
    ],
  },
  {
    question: "Which law ensures equal pay for equal work?",
    answers: [
      { text: "Equal Remuneration Act", correct: true },
      { text: "Right to Information Act", correct: false },
      { text: "Consumer Protection Act", correct: false },
      { text: "Wildlife Protection Act", correct: false },
    ],
  },
];

// Function to shuffle an array
const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const QuizComponent = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loadingNextQuestion, setLoadingNextQuestion] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleStartQuiz = () => {
    const shuffledQuestions = shuffleArray([...questions]);
    const selectedQuestions = shuffledQuestions.slice(0, 5);
    setSelectedQuestions(selectedQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setFeedback("");
  };

  const handleAnswerOptionClick = (answer, correct) => {
    setSelectedAnswer(answer);
    if (correct) {
      setScore(score + 1);
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect!");
    }

    setLoadingNextQuestion(true);

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < selectedQuestions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setFeedback("");
      } else {
        setShowScore(true);
      }
      setLoadingNextQuestion(false);
    }, 1000);
  };

  return (
    <Grid>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Card className="p-4" style={{ maxWidth: "100%", width: "100%" }}>
          {selectedQuestions.length === 0 ? (
            <AntButton type="primary" onClick={handleStartQuiz}>
              Start Quiz
            </AntButton>
          ) : showScore ? (
            <Result
              status="success"
              title={`You scored ${score} out of ${selectedQuestions.length}`}
              extra={[
                <AntButton type="primary" key="retry" onClick={handleStartQuiz}>
                  Retry Quiz
                </AntButton>,
              ]}
            />
          ) : (
            <>
              <Typography variant="h5" align="left" gutterBottom>
                Question {currentQuestion + 1}/{selectedQuestions.length}
              </Typography>
              <Typography variant="h6" align="left" gutterBottom>
                {selectedQuestions[currentQuestion].question}
              </Typography>
              <Divider />
              <Box mt={2} mb={2}>
                {selectedQuestions[currentQuestion].answers.map(
                  (answer, index) => (
                    <MuiButton
                      key={index}
                      fullWidth
                      variant="contained"
                      color={
                        selectedAnswer === answer.text
                          ? answer.correct
                            ? "success"
                            : "error"
                          : "primary"
                      }
                      onClick={() =>
                        handleAnswerOptionClick(answer.text, answer.correct)
                      }
                      disabled={!!selectedAnswer}
                      sx={{ mt: 1 }}
                    >
                      {answer.text}
                    </MuiButton>
                  )
                )}
              </Box>
              {loadingNextQuestion && <Spinner />}
              {feedback && (
                <Typography variant="h6" align="center">
                  {feedback}
                </Typography>
              )}
            </>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default QuizComponent;
