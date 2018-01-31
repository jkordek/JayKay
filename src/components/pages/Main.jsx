import React from 'react';
import { connect } from 'react-redux';
import News from '../common/panels/News/News';

class Main extends React.Component {
  render() {
    return (
      <div>
        <News />
      </div>
    )
  }
}

export default connect(null, {})(Main);
