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
      rankStatus: false,
      city: '',
      street: '',
      buildingNumber: '',
      postCode: '',
      name: '',
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);

  }

  componentWillMount() {
    apiClient.isUserLoggedIn()
      .catch((e) => {
        this.props.history.push({ pathname: '/' });
      });
  }

  submit(event) {
    event.preventDefault();
    const { email, password, phoneNumber, rank, street, buildingNumber, postCode, city } = this.state;
    const manager = {
      name: 'test',
      phoneNumber: '123123123',
      email: 'test@test.pl'
    };
    const salesman = {
      name: 'test',
      phoneNumber: '123123123',
      email: 'test@test.pl'
    };
    const administrator = {
      name: 'test',
      phoneNumber: '123123123',
      email: 'test@test.pl'
    };
    console.log(street, buildingNumber, postCode, city);
    apiClient.createUser(email, password, phoneNumber, undefined, rank)
      .then((result) => {
        console.log('przeszlo');
      })
      .catch((event) => {
      });

    apiClient.createPlace('name', street, buildingNumber, postCode, city, manager, salesman, administrator)
      .then((result) => {
        console.log('place created');
      })
      .catch((event) => {
        console.log('dupa');
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
                <input type="text" name="city" className="addUserInput" value={this.state.city} onChange={this.onChange} />
              </div>
              <div>
                <span>Ulica</span><br/>
                <input type="text" name="street" className="addUserInput" value={this.state.street} onChange={this.onChange} />
              </div>
            </div>
            <div className="addressNumber">
              <div>
                <span>Nr. budynku</span><br/>
                <input type="number" name="buildingNumber" className="addUserInput" value={this.state.buildingNumber} onChange={this.onChange} />
              </div>
              <div>
                <span>Kod pocztowy</span><br/>
                <input type="number" name="postCode" className="addUserInput" value={this.state.postCode} onChange={this.onChange} />
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
