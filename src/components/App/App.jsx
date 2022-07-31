import React, { Component } from 'react';

import Feedback from 'components/Feedback/Feedback';
// import Statistics from 'components/Statistics/Statistics';

class App extends Component {
  static defaultProps = {
    step: 1,
  };

  render() {
    return (
      <section>
        <Feedback />
        {/* <Statistics /> */}
      </section>
    );
  }
}

export default App;
