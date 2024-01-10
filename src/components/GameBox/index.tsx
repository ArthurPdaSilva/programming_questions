import { FormControl } from '@mui/material';
import { useQuestionContext } from '../../hooks/useQuestionContext';
import { GameBoxContainer, GameButtons } from './GameComponents';
import { QuestionOptions, QuestionTitle } from './Question';

export default function GameBox() {
  const { getCurrentQuestion } = useQuestionContext();
  const currentQuestion = getCurrentQuestion();

  return (
    <GameBoxContainer>
      <FormControl>
        <QuestionTitle title={currentQuestion.question} />
        <QuestionOptions options={currentQuestion.options} />
        <GameButtons />
      </FormControl>
    </GameBoxContainer>
  );
}
