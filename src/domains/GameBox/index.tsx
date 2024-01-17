import { FormControl } from '@mui/material';
import { useEffect, useState } from 'react';
import { useQuestionContext } from '../../global/hooks/useQuestionContext';
import { MarkedAlternativeType } from '../../global/types/QuestionsType';
import { GameBoxContainer, GameButtons, GameModalFailed, GameModalWin } from './features';
import { QuestionOptionsGroup, QuestionTitle } from './features/Question';

export default function GameBox() {
  const totalNumberOfPossibleWrongQuestions = 3;
  const { questions, markedAlternatives } = useQuestionContext();
  const [openModalWin, setOpenModalWin] = useState(false);
  const [openModalFailed, setOpenModalFailed] = useState(false);

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
      if (isWinner()) {
        setOpenModalWin(true);
      } else {
        setOpenModalFailed(true);
      }
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
    <>
      <GameModalWin openModal={openModalWin} setOpenModal={setOpenModalWin} />
      <GameModalFailed openModal={openModalFailed} setOpenModal={setOpenModalFailed} />
      <GameBoxContainer>
        <FormControl>
          <QuestionTitle />
          <QuestionOptionsGroup />
          <GameButtons />
        </FormControl>
      </GameBoxContainer>
    </>
  );
}
