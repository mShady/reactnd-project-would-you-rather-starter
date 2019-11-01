export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function addUserAnswer(userId, questionId, selectedAnswer) {
  return {
    type: ADD_USER_ANSWER,
    info: { userId, questionId, selectedAnswer }
  };
}

export function addUserQuestion(userId, questionId) {
  return {
    type: ADD_USER_QUESTION,
    info: { userId, questionId }
  };
}
