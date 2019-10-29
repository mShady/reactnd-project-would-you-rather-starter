import React, { Component } from "react";

class Vote extends Component {
  render() {
    const { text, forVotesCount, totalVotesCount, isYourVote } = this.props;
    return (
      <div className="itemContainer">
        {text}
        <div>
          {forVotesCount}/{totalVotesCount} votes
        </div>
        {isYourVote ? "(Your Vote!)" : ""}
      </div>
    );
  }
}
export default Vote;
