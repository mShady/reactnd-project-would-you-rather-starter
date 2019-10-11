import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    showAnsweredToggle: false
  };
  handleChange = e => {
    const showAnsweredToggle = e.target.checked;

    this.setState(() => ({
      showAnsweredToggle
    }));
  };
  render() {
    const { showAnsweredToggle } = this.state;
    return (
      <div>
        {showAnsweredToggle ? "Answered Questions" : "Unanswered Questions"}
        <input
          type="checkbox"
          onChange={this.handleChange}
          checked={showAnsweredToggle}
        />
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
