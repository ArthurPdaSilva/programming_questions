import { Button, ButtonGroup } from '@mui/material';
import { useQuestionContext } from '../../../../hooks/useQuestionContext';

export default function GameButtons() {
  const {
    isFirstQuestion,
    isLastQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    selectedValue,
    getCurrentQuestion,
    markedAlternatives,
    setMarkedAlternatives,
  } = useQuestionContext();
  const currentQuestion = getCurrentQuestion();

  const isPossibleToGoToPreviousQuestion = () => {
    if (isFirstQuestion()) {
      return;
    } else {
      goToPreviousQuestion();
    }
  };

  const isPossibleToGoToNextQuestion = () => {
    if (isLastQuestion()) {
      return;
    } else {
      if (haveQuestionMarked()) {
        const newMarkedAlternatives = markedAlternatives.map((alternative) => {
          if (alternative.questionId === currentQuestion.id) {
            return { questionId: currentQuestion.id, answer: selectedValue };
          }
          return alternative;
        });
        setMarkedAlternatives(newMarkedAlternatives);
      } else {
        setMarkedAlternatives([...markedAlternatives, { questionId: currentQuestion.id, answer: selectedValue }]);
      }
      console.log(markedAlternatives);
      goToNextQuestion();
    }
  };

  const haveQuestionMarked = () => {
    return markedAlternatives.some((alternative) => alternative.questionId === currentQuestion.id);
  };

  return (
    <ButtonGroup
      sx={{ display: 'flex', justifyContent: 'center' }}
      size="large"
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button onClick={isPossibleToGoToPreviousQuestion}>Voltar</Button>
      <Button onClick={isPossibleToGoToNextQuestion}>{isLastQuestion() ? 'Finalizar' : 'Avançar'}</Button>
    </ButtonGroup>
  );
}
