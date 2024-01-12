import { FormControl } from '@mui/material';
import { useEffect, useState } from 'react';
import { MarkedAlternativeType } from '../../context/QuestionsType';
import { useQuestionContext } from '../../hooks/useQuestionContext';
import { GameBoxContainer, GameButtons } from './GameComponents';
import { QuestionOptions, QuestionTitle } from './Question';

export default function GameBox() {
  const { questions } = useQuestionContext();
  const totalNumberOfPossibleWrongQuestions = 3;
  const [markedAlternatives, setMarkedAlternatives] = useState<MarkedAlternativeType[]>([]);

  useEffect(() => {
    function isWinner() {
      let totalPoints = 0;
      questions.forEach((question) => {
        const markedAlternative = markedAlternatives.find((alternative) => alternative.questionId === question.id);
        if (CheckingIsCorrectAnswer(markedAlternative, question)) {
          totalPoints += 1;
        }
      });
      return totalPoints > totalNumberOfPossibleWrongQuestions;
    }

    if (isFinish(markedAlternatives)) {
      isWinner();
    }

    function isFinish(markedAlternatives: MarkedAlternativeType[]) {
      return markedAlternatives.length === questions.length;
    }
  }, [markedAlternatives, questions]);

  function CheckingIsCorrectAnswer(
    markedAlternative: MarkedAlternativeType | undefined,
    question: { id: number; question: string; options: { value: string; label: string }[]; correctAnswer: string },
  ) {
    return markedAlternative?.answer === question.correctAnswer;
  }

  return (
    <GameBoxContainer>
      <FormControl>
        <QuestionTitle />
        <QuestionOptions />
        <GameButtons markedAlternatives={markedAlternatives} setMarkedAlternatives={setMarkedAlternatives} />
      </FormControl>
    </GameBoxContainer>
  );
}
