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
  totalNumberOfPossibleWrongQuestions: number;
  markedAlternatives: MarkedAlternativeType[];
  questions: QuestionType[];
  isChangingQuestion: boolean;
  selectedQuestionValue: string;
  setMarkedAlternatives: React.Dispatch<React.SetStateAction<MarkedAlternativeType[]>>;
  setSelectedQuestionValue: React.Dispatch<React.SetStateAction<string>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  getCurrentQuestion: () => QuestionType;
  changeQuestionProgramming: () => void;
  isFinish(): boolean;
}
