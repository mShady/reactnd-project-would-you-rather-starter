import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return <div>{this.props.needAuth ? "Authenticate!" : "Welcome!"}</div>;
  }
}

function mapStateToProps({ authedUser }) {
  return { needAuth: authedUser === null };
}

export default connect(mapStateToProps)(App);
