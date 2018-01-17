import React from 'react';
import { connect } from 'react-redux';
import SidePanel from '../common/menu/SidePanel';

class Main extends React.Component {
  render() {
    return (
      <div>
        <SidePanel />
      </div>
    )
  }
}

export default connect(null, {})(Main);
