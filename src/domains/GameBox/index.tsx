import { FormControl } from '@mui/material';
import { useEffect, useState } from 'react';
import { useQuestionContext } from '../../global/hooks/useQuestionContext';
import { MarkedAlternativeType } from '../../global/types/QuestionsType';
import AudioPlay from './components/AudioPlay';
import { GameBoxContainer, GameButtons, GameModalFailed, GameModalInit, GameModalWin } from './features';
import { QuestionOptionsGroup, QuestionTitle } from './features/Question';

export default function GameBox() {
  const { totalNumberOfPossibleWrongQuestions, questions, markedAlternatives } = useQuestionContext();
  const [openModalWin, setOpenModalWin] = useState(false);
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
  }, [markedAlternatives, questions, totalNumberOfPossibleWrongQuestions]);

  function CheckingIsCorrectAnswer(
    markedAlternative: MarkedAlternativeType | undefined,
    question: { id: number; question: string; options: { value: string; label: string }[]; correctAnswer: string },
  ) {
    return markedAlternative?.answer === question.correctAnswer;
  }

  return (
    <>
      <GameModalInit openModal={openModalInit} setOpenModal={setOpenModalInit} />
      <GameModalWin openModal={openModalWin} setOpenModal={setOpenModalWin} />
      <GameModalFailed openModal={openModalFailed} setOpenModal={setOpenModalFailed} />
      <GameBoxContainer>
        <FormControl>
          <QuestionTitle />
          <QuestionOptionsGroup />
          <GameButtons />
        </FormControl>
      </GameBoxContainer>
      <AudioPlay link="src/assets/audios/trilha.mp3" isControl={false} />
    </>
  );
}
