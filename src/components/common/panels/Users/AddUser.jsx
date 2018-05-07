import React, { Component } from 'react';
import SidePanel from '../../menu/SidePanel';
import OptionsBar from '../News/OptionsBar';
import apiClient from '../../../../helpers/APIClient';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      phoneNumber: '',
      rank: ''
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  submit = event => {
    const { email } = this.state;

    apiClient.createUser(email, password, phoneNumber, place, rank)
      .then((response) => {
        console.log('test');
      })
      .catch((err) => {
        console.log(err);
      })
    event.preventDefault();
  }

  render() {

    return (
      <div className="container">
        <SidePanel />
        <div className="addUser">
          <OptionsBar label="Powrót" anchor='./Users'/>
          <div className="addUserForm">
            <div className="userName">
              <div>
                <span>Login(Email)</span><br/>
                <input type="text" className="addUserInput" value={this.state.email} onChange={this.handleChangeEmail}/>
              </div>
              <div>
                <span>Hasło</span><br/>
                <input type="password" className="addUserInput"/>
              </div>
            </div>
            <div className="userPlaces">
              <div>
                <span>Nr. tel.</span><br/>
                <input type="text" className="addUserInput"/>
              </div>
            </div>
            <div className="userPlaces">
              <div>
                <span>Miasto</span><br/>
                <input type="text" className="addUserInput"/>
              </div>
              <div>
                <span>Ulica</span><br/>
                <input type="text" className="addUserInput"/>
              </div>
            </div>
            <div className="addressNumber">
              <div>
                <span>Nr. budynku</span><br/>
                <input type="number" className="addUserInput"/>
              </div>
              <div>
                <span>Nr. mieszkania</span><br/>
                <input type="number" className="addUserInput"/>
              </div>
              <div>
                <span>Kod pocztowy</span><br/>
                <input type="number" className="addUserInput"/>
              </div>
            </div>
            <button className="register" type="submit">Zarejestruj</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddUser;
