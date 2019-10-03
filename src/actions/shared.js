import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users }) => {
      dispatch(receiveUsers(users));
      // TODO: recieve questions
      dispatch(hideLoading());
    });
  };
}
