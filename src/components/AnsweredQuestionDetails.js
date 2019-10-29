import React, { Component } from "react";
import { connect } from "react-redux";
import Vote from "./Vote";

class AnsweredQuestionDetails extends Component {
  render() {
    console.log("props:", this.props);
    const { question, questionAuthor, authedUserAnswer } = this.props;
    const totalVotesCount =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    const didAuthedUserVoteForOptionOne =
      authedUserAnswer === "optionOne" ? true : false;
    return (
      <div>
        <div>Asked by {questionAuthor.name}</div>
        <img
          src={questionAuthor.avatarURL}
          alt={`Avatar of ${questionAuthor.name}`}
          className="avatar"
        />
        <div>
          Results:
          <Vote
            text={question.optionOne.text}
            forVotesCount={question.optionOne.votes.length}
            totalVotesCount={totalVotesCount}
            isYourVote={didAuthedUserVoteForOptionOne}
          />
          <Vote
            text={question.optionTwo.text}
            forVotesCount={question.optionTwo.votes.length}
            totalVotesCount={totalVotesCount}
            isYourVote={!didAuthedUserVoteForOptionOne}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { questionId }) {
  const question = questions[questionId];
  const questionAuthor = users[question.author];
  const authedUserAnswer = users[authedUser].answers[questionId];
  return { question, questionAuthor, authedUserAnswer };
}
export default connect(mapStateToProps)(AnsweredQuestionDetails);
