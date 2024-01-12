import { Button, ButtonGroup } from '@mui/material';
import { memo } from 'react';
import { useQuestionContext } from '../../../../hooks/useQuestionContext';
import GameButtonsProps from './GameButtonsProps';

function GameButtons({ markedAlternatives, setMarkedAlternatives }: GameButtonsProps) {
  const { selectedQuestionValue, questions, setCurrentQuestionIndex, getCurrentQuestion, changeQuestionProgramming } =
    useQuestionContext();
  const currentQuestion = getCurrentQuestion();

  const isFirstQuestion = () => {
    return currentQuestion.id === 0;
  };

  const isLastQuestion = () => {
    return currentQuestion.id === questions.length - 1;
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    changeQuestionProgramming();
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    changeQuestionProgramming();
  };

  const isPossibleToGoToPreviousQuestion = () => {
    if (!isFirstQuestion()) {
      editingMarkedAlternative();
      goToPreviousQuestion();
    }
  };

  const isPossibleToGoToNextQuestion = () => {
    editingMarkedAlternative();
    if (!isLastQuestion()) {
      goToNextQuestion();
    }
  };

  const editingMarkedAlternative = () => {
    if (haveQuestionMarked()) {
      const newMarkedAlternatives = returnMarkedAlternativesEdited();
      setMarkedAlternatives(newMarkedAlternatives);
    } else {
      setMarkedAlternatives([...markedAlternatives, { questionId: currentQuestion.id, answer: selectedQuestionValue }]);
    }
  };

  const haveQuestionMarked = () => {
    return markedAlternatives.some((alternative) => alternative.questionId === currentQuestion.id);
  };

  const returnMarkedAlternativesEdited = () => {
    return markedAlternatives.map((alternative) => {
      if (alternative.questionId === currentQuestion.id) {
        return { questionId: currentQuestion.id, answer: selectedQuestionValue };
      }
      return alternative;
    });
  };

  return (
    <ButtonGroup
      sx={{ display: 'flex', justifyContent: 'center', boxShadow: 'none' }}
      size="large"
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button onClick={isPossibleToGoToPreviousQuestion} sx={{ fontSize: '1.2rem' }}>
        Voltar
      </Button>
      <Button onClick={isPossibleToGoToNextQuestion} sx={{ fontSize: '1.2rem' }}>
        {isLastQuestion() ? 'Finalizar' : 'Avançar'}
      </Button>
    </ButtonGroup>
  );
}

export default memo(GameButtons);
