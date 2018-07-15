import React from 'react';
import MenuList from './MenuList';
import Logo from '../Logo';

class SidePanel extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="sidePanel">
        <Logo />
        <MenuList logOut={this.props.logOut}/>
      </div>
    )
  }

}

export default SidePanel;
