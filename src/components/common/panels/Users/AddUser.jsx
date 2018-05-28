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
      rank: 'user',
      rankStatus: false
    };

    this.onChange = this.onChange.bind(this);

  }

  componentWillMount() {
    apiClient.isUserLoggedIn()
      .catch((e) => {
        this.props.history.push({ pathname: '/' });
      });
  }

  submit = event => {
    event.preventDefault();
    const { email, password, phoneNumber, rank } = this.state;

    apiClient.createUser(email, password, phoneNumber, undefined, rank)
      .then((result) => {
        console.log('przeszlo');
      })
      .catch((e) => {
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSelect(e) {
    if( this.state.rankStatus == true) {
      this.setState({ rank: 'admin' });
    }
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
                <input type="text" name="email" className="addUserInput" value={this.state.email} onChange={this.onChange}/>
              </div>
              <div>
                <span>Hasło</span><br/>
                <input type="password" name="password" className="addUserInput" value={this.state.password} onChange={this.onChange}/>
              </div>
            </div>
            <div className="userPlaces">
              <div>
                <span>Nr. tel.</span><br/>
                <input type="text" name="phoneNumber" className="addUserInput" value={this.state.phoneNumber} onChange={this.onChange}/>
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
              <div>
                <span>Administrator</span><br/>
                <input type="checkbox" checked={this.state.rankStatus} onChange={this.onChange}/>
              </div>
            </div>
            <button className="register" onClick={this.submit}>
              Zarejestruj
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddUser;
