import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import Login from "./Login";
import Home from "./Home";
import Question from "./Question";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          {this.props.needAuth ? (
            <Login />
          ) : (
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/questions/:question_id"
                exact
                component={Question}
              />
              <Route path="/add" exact component={NewQuestion} />
              <Route path="/leaderboard" exact component={Leaderboard} />
              <Route component={NotFound} />
            </Switch>
          )}
        </Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { needAuth: authedUser === null };
}

export default connect(mapStateToProps)(App);
