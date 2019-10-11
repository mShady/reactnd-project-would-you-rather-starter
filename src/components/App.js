import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import Login from "./Login";
import Router from "./Router";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Fragment>
        <LoadingBar />
        {this.props.needAuth ? <Login /> : <Router />}
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { needAuth: authedUser === null };
}

export default connect(mapStateToProps)(App);
