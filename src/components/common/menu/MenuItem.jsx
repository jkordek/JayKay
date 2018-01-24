import React from 'react';
import classnames from 'classnames';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, doOnClick, selected } = this.props;

    return (
      <button onClick={(event) => doOnClick(label)} className={classnames('menuItem', {'selected': selected})}>
        {label}
      </button>
    )
  }
}

export default MenuItem;
