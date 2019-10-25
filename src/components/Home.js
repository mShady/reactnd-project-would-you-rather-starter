import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionOverview from "./QuestionOverview";

class Home extends Component {
  state = {
    showAnsweredToggle: false
  };
  handleChange = () => {
    this.setState(currentState => ({
      showAnsweredToggle: !currentState.showAnsweredToggle
    }));
  };
  render() {
    const { showAnsweredToggle } = this.state;
    const { answeredQuestions, unansweredQuestions } = this.props;
    const questionsList = showAnsweredToggle
      ? answeredQuestions
      : unansweredQuestions;
    return (
      <div className="questionsListContainer">
        <button
          className="tabHeader"
          disabled={!showAnsweredToggle}
          onClick={this.handleChange}
        >
          Answered Questions
        </button>
        <button
          className="tabHeader"
          disabled={showAnsweredToggle}
          onClick={this.handleChange}
        >
          Unanswered Questions
        </button>
        {questionsList.map(id => {
          return <QuestionOverview key={id} questionId={id}></QuestionOverview>;
        })}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    answeredQuestions: Object.keys(questions)
      .filter(
        id =>
          questions[id].optionOne.votes.includes(authedUser) ||
          questions[id].optionTwo.votes.includes(authedUser)
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    unansweredQuestions: Object.keys(questions)
      .filter(
        id =>
          !questions[id].optionOne.votes.includes(authedUser) &&
          !questions[id].optionTwo.votes.includes(authedUser)
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  };
}

export default connect(mapStateToProps)(Home);
