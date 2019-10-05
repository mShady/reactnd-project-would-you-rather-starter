import React, { Component } from "react";
import { connect } from "react-redux";
import { resetAuthedUser } from "../actions/authedUser";

class AuthedUser extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(resetAuthedUser());
  };
  render() {
    const { authedUserDetails } = this.props;
    console.log("authedUserDetails:", authedUserDetails);
    return (
      <div>
        {authedUserDetails === null ? (
          ""
        ) : (
          <div>
            <div>
              <img
                src={authedUserDetails.avatarURL}
                alt={`Avatar of ${authedUserDetails.name}`}
                className="avatar"
              />

              <button onClick={this.handleSubmit}>Sign out</button>
            </div>
            {`Hello ${authedUserDetails.name}!`}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUserDetails: users[authedUser]
  };
}

export default connect(mapStateToProps)(AuthedUser);
