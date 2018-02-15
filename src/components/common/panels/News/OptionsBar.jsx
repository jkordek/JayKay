import React from 'react';

const OptionsBar = ({ label, anchor }) => (

  <div className="newsPanel">
    <div className="optionsBar">
      <a className="addNewsBtn" href={anchor}>
        {label}
      </a>
    </div>
  </div>


);

export default OptionsBar;
