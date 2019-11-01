import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { resetAuthedUser } from "../actions/authedUser";

class AuthedUser extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(resetAuthedUser());
  };
  render() {
    const { authedUserDetails } = this.props;
    return authedUserDetails === null ? (
      ""
    ) : (
      <Fragment>
        {`Hello ${authedUserDetails.name}!`}
        <img
          src={authedUserDetails.avatarURL}
          alt={`Avatar of ${authedUserDetails.name}`}
          className="smallAvatar"
        />
        <button onClick={this.handleSubmit}>Sign out</button>
      </Fragment>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUserDetails: users[authedUser]
  };
}

export default connect(mapStateToProps)(AuthedUser);
