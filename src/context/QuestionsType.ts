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
  questions: QuestionType[];
  isChangingQuestion: boolean;
  selectedQuestionValue: string;
  setSelectedQuestionValue: React.Dispatch<React.SetStateAction<string>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  getCurrentQuestion: () => QuestionType;
  changeQuestionProgramming: () => void;
}
