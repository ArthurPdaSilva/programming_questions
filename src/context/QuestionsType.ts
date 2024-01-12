export interface OptionType {
  value: string;
  label: string;
}

export interface QuestionType {
  id: number;
  question: string;
  options: OptionType[];
  correctAnswer: string;
}

export interface MarkedAlternativeType {
  questionId: number;
  answer: string;
}

export interface QuestionContextType {
  isChangingQuestion: boolean;
  selectedQuestionValue: string;
  questions: QuestionType[];
  setSelectedQuestionValue: React.Dispatch<React.SetStateAction<string>>;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  getCurrentQuestion: () => QuestionType;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}
