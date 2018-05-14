import React from 'react';
import { connect } from 'react-redux';
import Logo from '../common/Logo';
import apiClient from '../../helpers/APIClient';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
  }

  componentWillMount() {
    apiClient.isUserLoggedIn()
      .then((res) => {
        this.props.history.push({ pathname: '/UserLoading' });
      })
      .catch((e) => {
        //do sth
      });
  }

  login(e) {
    e.preventDefault();
    const { username, password } = this.state;

    apiClient.setUserCredentials(username, password);
    apiClient.getMe()
      .then((result) => {
        const user = result.data;
        this.props.history.push({ pathname: '/pages/UserLoading' });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="authContainer">
        <Logo />
        <div className="authForm">
          <div className="authFormLeft">
            <input type="text" name="username" placeholder="email" className="title" value={this.state.username} onChange={this.onChange} />
            <input type="password" name="password" placeholder="hasło" className="title" value={this.state.password} onChange={this.onChange} />
          </div>
          <button className="signIn" onClick={this.login}>
            Zaloguj
          </button>
        </div>
      </div>
    )
  }
}

export default Auth;
