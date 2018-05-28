import React from 'react';
import classnames from 'classnames';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, doOnClick, selected, anchor } = this.props;

    if(anchor != 'Forum') {
      return (
        <a onClick={(event) => doOnClick(label)} className={classnames('menuItem', {'selected': selected})} href={'/' + anchor}>
          {label}
        </a>
      )
    } else {
      return (
      <a onClick={(event) => doOnClick(label)} className={classnames('menuItem', {'selected': selected})} href='http://forum.jaykay-feliks.pl'>
        {label}
      </a>
      )
    }
  }
}

export default MenuItem;
