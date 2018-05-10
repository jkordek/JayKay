import React from 'react';
import { connect } from 'react-redux';
import Logo from '../common/Logo';
import apiClient from '../../helpers/APIClient';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    const { username, password } = this.state;

    apiClient.setUserCredentials(username, password);
    apiClient.getNews()
      .then((result) => {
        this.props.history.push({ pathname: '/invite', state: { news: result.data } });
      })
      .catch((e) => {
        // show some error
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
            <input type="text" name="username" className="title" value={this.state.username} onChange={this.onChange} />
            <input type="password" name="password" className="title" value={this.state.password} onChange={this.onChange} />
          </div>
          <button onClick={this.login}>
            Zaloguj
          </button>
        </div>
      </div>
    )
  }
}

export default Auth;
