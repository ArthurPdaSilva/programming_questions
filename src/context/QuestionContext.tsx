import React, { ReactNode, createContext, useState } from 'react';
import questions from '../db';
import { QuestionContextType } from './QuestionsType';

export const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

interface QuestionContextProviderProps {
  children: ReactNode;
}

export const QuestionContextProvider: React.FC<QuestionContextProviderProps> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestionValue, setSelectedQuestionValue] = useState(questions[currentQuestionIndex].options[0].value);
  const [isChangingQuestion, setIsChangingQuestion] = useState(true);

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    changeQuestionProgramming();
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    changeQuestionProgramming();
  };

  const changeQuestionProgramming = () => {
    setIsChangingQuestion(false);
    setTimeout(() => {
      setIsChangingQuestion(true);
    }, 700);
  };

  const getCurrentQuestion = () => {
    return questions[currentQuestionIndex];
  };

  const contextValue: QuestionContextType = {
    isChangingQuestion,
    selectedQuestionValue,
    questions,
    goToNextQuestion,
    goToPreviousQuestion,
    setSelectedQuestionValue,
    setCurrentQuestionIndex,
    getCurrentQuestion,
  };

  return <QuestionContext.Provider value={contextValue}>{children}</QuestionContext.Provider>;
};
