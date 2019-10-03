import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import Login from "./Login";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.needAuth ? <Login /> : "Welcome!"}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { needAuth: authedUser === null };
}

export default connect(mapStateToProps)(App);
