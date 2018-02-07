import React from 'react';
import classnames from 'classnames';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, doOnClick, selected } = this.props;

    return (
      <a onClick={(event) => doOnClick(label)} className={classnames('documentsMenuItem', {'selected': selected})}>
        {label}
      </a>
    )
  }
}

export default Menu;
