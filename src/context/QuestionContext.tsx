import React, { ReactNode, createContext, useState } from 'react';
import { MarkedAlternativeType, QuestionType } from './QuestionsType';

interface QuestionContextType {
  isChangingQuestion: boolean;
  selectedValue: string;
  questions: QuestionType[];
  markedAlternatives: MarkedAlternativeType[];
  setMarkedAlternatives: React.Dispatch<React.SetStateAction<MarkedAlternativeType[]>>;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  getCurrentQuestion: () => QuestionType;
  isFirstQuestion: () => boolean;
  isLastQuestion: () => boolean;
}

export const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

interface QuestionContextProviderProps {
  children: ReactNode;
  initialQuestions: QuestionType[];
}

export const QuestionContextProvider: React.FC<QuestionContextProviderProps> = ({ children, initialQuestions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState(initialQuestions[currentQuestionIndex].options[0].value);
  const [isChangingQuestion, setIsChangingQuestion] = React.useState(true);
  const [markedAlternatives, setMarkedAlternatives] = useState<MarkedAlternativeType[]>([
    { questionId: initialQuestions[0].id, answer: initialQuestions[0].options[0].value },
  ]);

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
    return initialQuestions[currentQuestionIndex];
  };

  const isFirstQuestion = () => {
    return currentQuestionIndex === 0;
  };

  const isLastQuestion = () => {
    return currentQuestionIndex === initialQuestions.length - 1;
  };

  const contextValue: QuestionContextType = {
    isChangingQuestion,
    selectedValue,
    markedAlternatives,
    questions: initialQuestions,
    setSelectedValue,
    setMarkedAlternatives,
    goToNextQuestion,
    goToPreviousQuestion,
    getCurrentQuestion,
    isFirstQuestion,
    isLastQuestion,
  };

  return <QuestionContext.Provider value={contextValue}>{children}</QuestionContext.Provider>;
};
