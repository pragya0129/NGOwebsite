import React, { useState } from "react";
import { Card, Divider, Spinner } from "@nextui-org/react";
import { Grid, Typography, Button as MuiButton, Box } from "@mui/material";
import { Result, Button as AntButton } from "antd";
import { useTranslation } from "react-i18next";

type Answer = {
  text: string;
  correct: boolean;
};

type Question = {
  question: string;
  answers: Answer[];
};

const QuizComponent: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState<boolean>(i18n.language === "en");
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [loadingNextQuestion, setLoadingNextQuestion] =
    useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string>("");

  const questions: Question[] = t("quiz.questions", { returnObjects: true });

  const shuffleArray = (array: Question[]): Question[] => {
    let currentIndex = array.length;
    let randomIndex;

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

  const handleStartQuiz = (): void => {
    const shuffledQuestions = shuffleArray([...questions]);
    const selectedQuestions = shuffledQuestions.slice(0, 5);
    setSelectedQuestions(selectedQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setFeedback("");
  };

  const handleAnswerOptionClick = (answer: string, correct: boolean): void => {
    setSelectedAnswer(answer);
    if (correct) {
      setScore(score + 1);
      setFeedback(t("Correct!"));
    } else {
      setFeedback(t("Incorrect!"));
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

  const toggleLanguage = (): void => {
    const newLang = isEnglish ? "hi" : "en";
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
  };

  return (
    <Grid>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Card className="p-4" style={{ maxWidth: "100%", width: "100%" }}>
          {selectedQuestions.length === 0 ? (
            <AntButton type="primary" onClick={handleStartQuiz}>
              {t("StartQuiz")}
            </AntButton>
          ) : showScore ? (
            <Result
              status="success"
              title={`${t("You scored")} ${score} ${t("out of")} ${selectedQuestions.length}`}
              extra={[
                <AntButton type="primary" key="retry" onClick={handleStartQuiz}>
                  {t("Retry Quiz")}
                </AntButton>,
              ]}
            />
          ) : (
            <>
              <Typography variant="h5" align="left" gutterBottom>
                {`${t("Question")} ${currentQuestion + 1}/${selectedQuestions.length}`}
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
