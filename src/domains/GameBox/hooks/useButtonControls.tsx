import { useQuestionContext } from '../../../global/hooks/useQuestionContext';

export default function useButtonControls() {
  const {
    markedAlternatives,
    selectedQuestionValue,
    questions,
    setMarkedAlternatives,
    setCurrentQuestionIndex,
    getCurrentQuestion,
    changeQuestionProgramming,
  } = useQuestionContext();
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

  const isNextOrFishishText = isLastQuestion() ? 'Finalizar' : 'Avançar';

  return { isNextOrFishishText, isPossibleToGoToPreviousQuestion, isPossibleToGoToNextQuestion };
}
