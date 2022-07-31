import React, { Component } from 'react';

class Feedback extends Component {
  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  changeNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  changeBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.changeGood}>
          Good
        </button>
        <button type="button" onClick={this.changeNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.changeBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: </li>
          <li>Positive feedback: {}%</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
