import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false
  };

  handleSubmit = () => {
    const { optionOne, optionTwo } = this.state;
    this.props.dispatch(handleAddQuestion(optionOne, optionTwo)).then(() =>
      this.setState(() => ({
        toHome: true
      }))
    );
    this.setState(() => ({
      optionOne: "",
      optionTwo: ""
    }));
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    if (this.state.toHome === true) {
      return <Redirect to="/" />;
    }
    const { optionOne, optionTwo } = this.state;
    return (
      <Fragment>
        <div>
          <h2>Create New Question</h2>
          Complete the question:
          <div>Would you rather..</div>
          <input
            type="text"
            placeholder="Enter Option One Text Here"
            className="text"
            id="optionOne"
            value={this.state.optionOne}
            onChange={this.handleChange}
          />
          <div>OR</div>
          <input
            type="text"
            placeholder="Enter Option Two Text Here"
            className="text"
            id="optionTwo"
            value={this.state.optionTwo}
            onChange={this.handleChange}
          />
        </div>
        <input
          type="submit"
          text="Submit"
          onClick={this.handleSubmit}
          disabled={optionOne === "" || optionTwo === ""}
        />
      </Fragment>
    );
  }
}

export default connect()(NewQuestion);
