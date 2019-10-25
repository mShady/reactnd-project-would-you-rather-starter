import React, { Component } from "react";
import { connect } from "react-redux";
import AnsweredQuestionDetails from "./AnsweredQuestionDetails";
import UnansweredQuestionDetails from "./UnansweredQuestionDetails";

class QuestionDetails extends Component {
  render() {
    const showAsAnswered = this.props.didAuthedUserAnswerTheQuestion;
    const questionId = this.props.match.params.questionId;
    return (
      <div>
        {showAsAnswered ? (
          <AnsweredQuestionDetails questionId={questionId} />
        ) : (
          <UnansweredQuestionDetails questionId={questionId} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }, { match }) {
  const questionId = match.params.questionId;
  const authedUserDetails = users[authedUser];
  return {
    didAuthedUserAnswerTheQuestion: Object.keys(
      authedUserDetails.answers
    ).includes(questionId)
  };
}

export default connect(mapStateToProps)(QuestionDetails);
