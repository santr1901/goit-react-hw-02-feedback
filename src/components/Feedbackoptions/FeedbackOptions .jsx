import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);
  console.log(onLeaveFeedback);
  return Object.keys(options).map(option => (
    <div key={option}>
      <button type="button" name={option} onClick={onLeaveFeedback}>
        {option}
      </button>
      {/* <button type="button" name="neutral" onClick={options[1]}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={options[2]}>
        Bad
      </button> */}
    </div>
  ));
};

export default FeedbackOptions;
