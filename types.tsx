export type RootStackParamList = {
  Main: undefined;
  Question: undefined;
  Result: undefined;
};

export type Question = {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[],
};

export type QuestionListResponse = {
  response_code: number;
  results: Question[];
}

export type AnswerList = {
  question: string;
  answer: string;
  userAnswer: string;
};
