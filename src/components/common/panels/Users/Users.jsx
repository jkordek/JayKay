import React, { Component } from 'react';
import SidePanel from '../../menu/SidePanel';
import OptionsBar from '../News/OptionsBar';
import apiClient from '../../../../helpers/APIClient';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    apiClient.isUserLoggedIn()
      .then(() => {
        return apiClient.getUsers();
      })
      .then((result) => {
        const data = result.data;
        this.setState({users: data});
      })
      .catch((e) => {
        this.props.history.push({ pathname: '/' });
      });


  }

  render() {
    const usersList = this.state.users.map((user) => {
      return <li>{user.email}</li>
    })
    return (
      <div className="container">
        <SidePanel />
        <div className="users">
          <OptionsBar label="Dodaj użytkownika" anchor="./AddUser"/>
          <ul>
            {usersList}
          </ul>
        </div>
      </div>
    )
  }
}

export default Users;
