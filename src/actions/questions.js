import { showLoading, hideLoading } from "react-redux-loading";
import { saveAnswer, saveQuestion } from "../utils/api";
import { addUserAnswer, addUserQuestion } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

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

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
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

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }).then(question => {
      dispatch(addQuestion(question));
      dispatch(addUserQuestion(authedUser, question.id));
      dispatch(hideLoading());
    });
  };
}
