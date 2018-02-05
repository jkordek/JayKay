import React from 'react';
import classnames from 'classnames';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, doOnClick, selected, anchor } = this.props;

    return (
      <a onClick={(event) => doOnClick(label)} className={classnames('menuItem', {'selected': selected})} href={'/panels/' + anchor + '/' + anchor}>
        {label}
      </a>
    )
  }
}

export default MenuItem;
