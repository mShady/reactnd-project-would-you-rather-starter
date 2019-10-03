import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    selectedUser: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.selectedUser));
  };
  handleChange = e => {
    const selectedUser = e.target.value;

    this.setState(() => ({
      selectedUser
    }));
  };
  render() {
    const { selectedUser } = this.state;
    return (
      <div>
        {this.props.users.length > 0 ? (
          <form onSubmit={this.handleSubmit}>
            <select value={selectedUser} onChange={this.handleChange}>
              <option value="" disabled>
                Select User
              </option>
              {this.props.users.map(u => (
                <option value={u.id} key={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
            <button type="submit" disabled={selectedUser === ""}>
              Sign In
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).map(id => ({
      id,
      name: users[id].name,
      avatar: users[id].avatarURL
    }))
  };
}

export default connect(mapStateToProps)(Login);
