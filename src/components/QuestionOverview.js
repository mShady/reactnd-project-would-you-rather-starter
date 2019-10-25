import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class QuestionOverview extends Component {
  render() {
    const { user, question, questionId } = this.props;
    return (
      <div className="questionContainer">
        <div>{user.name} asks:</div>
        <img
          src={user.avatarURL}
          alt={`Avatar of ${user.name}`}
          className="avatar"
        />
        <div>Whould you rather:</div>
        <div>
          <span className="option">{question.optionOne.text}</span>
          <span> or </span>
          <span className="option">{question.optionTwo.text}</span>
          <span> ? </span>
          <NavLink to={`/questions/${questionId}`}>View Poll</NavLink>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }, { questionId }) {
  const question = questions[questionId];
  const user = users[question.author];
  return {
    question,
    user
  };
}

export default connect(mapStateToProps)(QuestionOverview);
