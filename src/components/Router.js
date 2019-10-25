import React, { Component } from "react";
import Home from "./Home";
import QuestionDetails from "./QuestionDetails";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import NotFound from "./NotFound";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/questions/:questionId"
            exact
            component={QuestionDetails}
          />
          <Route path="/add" exact component={NewQuestion} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
