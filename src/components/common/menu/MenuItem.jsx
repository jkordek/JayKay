import React from 'react';
import classnames from 'classnames';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, doOnClick, selected, anchor } = this.props;

    return (
      <button onClick={(event) => doOnClick(label)} className={classnames('menuItem', {'selected': selected})} href={'../panels/News/' + label}>
        {label}
      </button>
    )
  }
}

export default MenuItem;
