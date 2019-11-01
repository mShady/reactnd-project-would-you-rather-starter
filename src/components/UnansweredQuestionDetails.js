import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";

class UnansweredQuestionDetails extends Component {
  state = {
    selectedOption: "optionOne"
  };
  handleOptionChange = e => {
    const selectedOption = e.target.value;
    this.setState({ selectedOption });
  };
  handleSubmit = e => {
    const { questionId, authedUser } = this.props;

    this.props.dispatch(
      handleAnswerQuestion(questionId, this.state.selectedOption, authedUser)
    );
  };
  render() {
    const { question, questionAuthor } = this.props;

    return (
      <div>
        <div>{questionAuthor.name} asks:</div>
        <img
          src={questionAuthor.avatarURL}
          alt={`Avatar of ${questionAuthor.name}`}
          className="avatar"
        />
        <div>
          Would you rather...
          <div>
            <input
              type="radio"
              value="optionOne"
              checked={this.state.selectedOption === "optionOne"}
              onChange={this.handleOptionChange}
            />
            {question.optionOne.text}
          </div>
          <div>
            <input
              type="radio"
              value="optionTwo"
              checked={this.state.selectedOption === "optionTwo"}
              onChange={this.handleOptionChange}
            />
            {question.optionTwo.text}
          </div>
        </div>
        <input type="submit" text="Submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { questionId }) {
  const question = questions[questionId];
  const questionAuthor = users[question.author];
  return { question, questionAuthor, authedUser };
}
export default connect(mapStateToProps)(UnansweredQuestionDetails);
