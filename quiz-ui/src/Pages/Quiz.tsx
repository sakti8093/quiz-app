import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../Data/data";
import { Box, Button, Checkbox, Text } from "@chakra-ui/react";
import ScoreCard from "../components/ScoreCard";

type questions = {
  question: string;
  options: string[];
  answer: number;
};

type storeState = {
  currentQuestion: number;
  showScoreboard: boolean;
  questions: questions[] | null;
  selected: number | null;
  score: number;
};

const Quiz = () => {
  const { option } = useParams();

  const [store, setStore] = useState<storeState>({
    questions: null,
    currentQuestion: 0,
    showScoreboard: false,
    selected: null,
    score: 0,
  });
  
  const { questions,currentQuestion,showScoreboard,selected,score } = store
  
  const [timeLeft, setTimeLeft] = useState<number>(60);

  useEffect(() => {
    if (option === "react") {
      setStore({ ...store, questions: data.react });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setStore({ ...store, showScoreboard: true });
      return;
    }
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const handleSelectedOption = (index: number) => {
    setStore({ ...store, selected: index });
  };

  const handleNextQuest = () => {
    setStore((prev) => {
      const updatedStore = { ...prev };
      if (prev.questions && prev.currentQuestion + 1 <= prev.questions.length - 1) {
        updatedStore.currentQuestion = prev.currentQuestion + 1;
      } else {
        updatedStore.showScoreboard = true;
      }
      if (prev.questions && prev.selected === prev.questions[prev.currentQuestion].answer) {
        updatedStore.score = updatedStore.score + 2;
      }
      updatedStore.selected = null;
      return updatedStore;
    });
  };

  if (showScoreboard) {
    return (
      <ScoreCard score={score} total={questions ? 2 * questions?.length : 0} />
    );
  }

  if (!questions) {
    return null;
  }

  return (
    <Box height="100vh">
      <Box
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text>
          {currentQuestion + 1} / {questions.length}
        </Text>
        <Text
          fontWeight="bold"
          rounded="full"
          bgColor="green"
          p="0 20px"
          color="white"
        >
          {Math.floor(timeLeft / 60)}:{timeLeft % 60} m left
        </Text>
      </Box>
      <Text fontSize="x-large" fontWeight="bold">
        { questions && questions[currentQuestion].question}
      </Text>
      { questions && questions[currentQuestion].options?.map((elem, index) => (
        <Box
          key={index}
          p={4}
          display="block"
          mt="30px"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          onChange={() => handleSelectedOption(index)}
        >
          <Checkbox value={index} isChecked={selected === index}>
            {elem}
          </Checkbox>
        </Box>
      ))}
      <Button
        display="block"
        onClick={() => handleNextQuest()}
        margin="auto"
        mt="50px"
        padding="0 30px"
        colorScheme="teal"
        color="white"
      >
        {currentQuestion === questions.length - 1
          ? "Submit"
          : "Next"}
      </Button>
    </Box>
  );
};

export default Quiz;
