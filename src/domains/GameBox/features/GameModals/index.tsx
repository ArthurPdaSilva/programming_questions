import { useEffect, useState } from 'react';
import { useQuestionContext } from '../../../../global/hooks/useQuestionContext';
import { MarkedAlternativeType, QuestionType } from '../../../../global/types/QuestionsType';
import GameModalFailed from './GameModalFailed';
import GameModalInit from './GameModalInit';
import GameModalWin from './GameModalWin';

export default function GameModals() {
  const { totalNumberOfPossibleWrongQuestions, questions, markedAlternatives, isFinish } = useQuestionContext();

  const [openModalWin, setOpenModalWin] = useState(true);
  const [openModalFailed, setOpenModalFailed] = useState(false);
  const [openModalInit, setOpenModalInit] = useState(markedAlternatives.length === 0);

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

    if (isFinish()) {
      if (isWinner()) {
        setOpenModalWin(true);
      } else {
        setOpenModalFailed(true);
      }
    }
  }, [isFinish, markedAlternatives, questions, totalNumberOfPossibleWrongQuestions]);

  function CheckingIsCorrectAnswer(markedAlternative: MarkedAlternativeType | undefined, question: QuestionType) {
    return markedAlternative?.answer === question.correctAnswer;
  }

  return (
    <>
      <GameModalInit openModal={openModalInit} setOpenModal={setOpenModalInit} />
      <GameModalWin openModal={openModalWin} setOpenModal={setOpenModalWin} />
      <GameModalFailed openModal={openModalFailed} setOpenModal={setOpenModalFailed} />
    </>
  );
}
