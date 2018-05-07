import React, { Component } from 'react';
import SidePanel from '../../menu/SidePanel';
import OptionsBar from '../News/OptionsBar';
import apiClient from '../../../../helpers/APIClient';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <SidePanel />
        <div className="users">
          <OptionsBar label="Dodaj użytkownika" anchor="./AddUser"/>
          <ul>

          </ul>
        </div>
      </div>
    )
  }
}

export default Users;
