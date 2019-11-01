import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...action.questions };
    case ANSWER_QUESTION:
      const { questionId, selectedOption, authedUser } = action.info;
      const newVotes = state[questionId][selectedOption]["votes"].concat(
        authedUser
      );
      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [selectedOption]: {
            ...state[questionId][selectedOption],
            votes: newVotes
          }
        }
      };
    default:
      return state;
  }
}
