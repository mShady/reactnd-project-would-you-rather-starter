import { showLoading, hideLoading } from "react-redux-loading";
import { saveAnswer } from "../utils/api";
import { addUserAnswer } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function answerQuestion(questionId, selectedOption, authedUser) {
  return {
    type: ANSWER_QUESTION,
    info: { questionId, selectedOption, authedUser }
  };
}

export function handleAnswerQuestion(questionId, selectedOption, authedUser) {
  return dispatch => {
    dispatch(showLoading());
    return saveAnswer(authedUser, questionId, selectedOption).then(() => {
      dispatch(answerQuestion(questionId, selectedOption, authedUser));
      dispatch(addUserAnswer(authedUser, questionId, selectedOption));
      dispatch(hideLoading());
    });
  };
}
