import React, { ReactNode, createContext, useState } from 'react';
import questions from '../db/questions';
import { MarkedAlternativeType, QuestionContextType } from '../types/QuestionsType';

export const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

interface QuestionContextProviderProps {
  children: ReactNode;
}

export const QuestionContextProvider: React.FC<QuestionContextProviderProps> = ({ children }) => {
  const totalNumberOfPossibleWrongQuestions = 3;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestionValue, setSelectedQuestionValue] = useState(questions[currentQuestionIndex].options[0].value);
  const [isChangingQuestion, setIsChangingQuestion] = useState(true);
  const [markedAlternatives, setMarkedAlternatives] = useState<MarkedAlternativeType[]>([]);

  const changeQuestionProgramming = () => {
    setIsChangingQuestion(false);
    setTimeout(() => {
      setIsChangingQuestion(true);
    }, 700);
  };

  const getCurrentQuestion = () => {
    return questions[currentQuestionIndex];
  };

  function isFinish() {
    return markedAlternatives.length === questions.length;
  }

  const contextValue: QuestionContextType = {
    totalNumberOfPossibleWrongQuestions,
    markedAlternatives,
    isChangingQuestion,
    selectedQuestionValue,
    questions,
    setMarkedAlternatives,
    setSelectedQuestionValue,
    setCurrentQuestionIndex,
    getCurrentQuestion,
    changeQuestionProgramming,
    isFinish,
  };

  return <QuestionContext.Provider value={contextValue}>{children}</QuestionContext.Provider>;
};
