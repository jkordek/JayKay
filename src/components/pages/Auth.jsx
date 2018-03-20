import React from 'react';
import Logo from '../common/Logo';

class Auth extends React.Component {
  render() {
    return (
      <div className="authContainer">
        <Logo />
        <div className="authForm">
          <div className="authFormLeft">
            <input type="text" className="title" />
            <input type="text" className="title" />
          </div>
          <div className="authFormRight">
            <select>
              
            </select>
          </div>
        </div>
      </div>
    )
  }
}
