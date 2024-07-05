import React, { useState } from "react";
import { Card, Divider, Spinner } from "@nextui-org/react";
import { Grid, Typography, Button as MuiButton, Box } from "@mui/material";
import { Result, Button as AntButton } from "antd";

const questions = [
  {
    question: "What is the primary goal of our NGO?",
    answers: [
      { text: "Uplifting women", correct: true },
      { text: "Spreading legal awareness", correct: true },
      { text: "Addressing all kinds of legal needs", correct: true },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What rights are women entitled to under the law?",
    answers: [
      { text: "Right to education", correct: true },
      { text: "Right to work", correct: true },
      { text: "Right to equal pay", correct: true },
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
];

const QuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loadingNextQuestion, setLoadingNextQuestion] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

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
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setFeedback("");
      } else {
        setShowScore(true);
      }
      setLoadingNextQuestion(false);
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setFeedback("");
  };

  return (
    <Grid >
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Card
          className="p-4"
          style={{ maxWidth: "100%", width: "100%" }}
        >
          {showScore ? (
            <Result
              status="success"
              title={`You scored ${score} out of ${questions.length}`}
              extra={[
                <AntButton type="primary" key="retry" onClick={resetQuiz}>
                  Retry Quiz
                </AntButton>,
              ]}
            />
          ) : (
            <>
              <Typography variant="h5" align="left" gutterBottom>
                Question {currentQuestion + 1}/{questions.length}
              </Typography>
              <Typography variant="h6" align="left" gutterBottom>
                {questions[currentQuestion].question}
              </Typography>
              <Divider />
              <Box mt={2} mb={2}>
                {questions[currentQuestion].answers.map((answer, index) => (
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
                ))}
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
