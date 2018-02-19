import React from 'react';
import SidePanel from '../../menu/SidePanel';
import Monthly from './Monthly';

class Finances extends React.Component {
  render() {
    return (
      <div className="container">
        <SidePanel />
        <Monthly />
      </div>
    )
  }
}

export default Finances;
