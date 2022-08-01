import React from 'react';

const FeedbackOptions = ({ options }) => {
  return (
    <div>
      <button type="button" onClick={options[0]}>
        Good
      </button>
      <button type="button" onClick={options[1]}>
        Neutral
      </button>
      <button type="button" onClick={options[2]}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
