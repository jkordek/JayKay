import React from 'react';
import classnames from 'classnames';

const Options = ({label}) => (
  <div className="newsOptions">
    <button className="addNews">
      {label}
    </button>
  </div>
);

export default Options;
