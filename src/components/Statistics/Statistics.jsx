import React, { Component } from 'react';

class Statistic extends Component {
  static defaultProps = {
    goodMark: 0,
    neutralMark: 0,
    badMark: 0,
  };

  render() {
    // const { allMarks } = this.props;

    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: </li>
          <li>Neutral: </li>
          <li>Bad: </li>
          <li>Total: </li>
          <li>Positive feedback: %</li>
        </ul>
      </div>
    );
  }
}

export default Statistic;
