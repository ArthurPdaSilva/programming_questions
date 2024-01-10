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
