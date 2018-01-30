import React from 'react';
import { connect } from 'react-redux';
import SidePanel from '../common/menu/SidePanel';
import News from '../common/panels/News/News';

class Main extends React.Component {
  render() {
    return (
      <div>
        <SidePanel />
        <News />
      </div>
    )
  }
}

export default connect(null, {})(Main);
