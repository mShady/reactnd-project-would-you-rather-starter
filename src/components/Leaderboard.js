import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    return (
      <div>
        {this.props.orderedUsers.map(user => {
          const answersCount = Object.keys(user.answers).length;
          const score = answersCount + user.questions.length;
          return (
            <div key={user.id} className="itemContainer">
              <div>{user.name}</div>
              <img
                src={user.avatarURL}
                alt={`Avatar of ${user.name}`}
                className="avatar"
              />
              <div>Answered Questions: {answersCount}</div>
              <div>Created Questions: {user.questions.length}</div>
              <div>Score: {score}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const orderedUsers = Object.keys(users)
    .sort(
      (a, b) =>
        users[b].questions.length +
        Object.keys(users[b].answers).length -
        (users[a].questions.length + Object.keys(users[a].answers).length)
    )
    .map(id => users[id]);
  return { orderedUsers };
}

export default connect(mapStateToProps)(Leaderboard);
