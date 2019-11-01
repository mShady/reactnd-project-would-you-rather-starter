import {
  RECEIVE_USERS,
  ADD_USER_ANSWER,
  ADD_USER_QUESTION
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...action.users };
    case ADD_USER_QUESTION: {
      const { userId, questionId } = action.info;
      return {
        ...state,
        [userId]: {
          ...state[userId],
          questions: state[userId].questions.concat(questionId)
        }
      };
    }
    case ADD_USER_ANSWER: {
      const { userId, questionId, selectedAnswer } = action.info;
      return {
        ...state,
        [userId]: {
          ...state[userId],
          answers: { ...state[userId].answers, [questionId]: selectedAnswer }
        }
      };
    }
    default:
      return state;
  }
}
