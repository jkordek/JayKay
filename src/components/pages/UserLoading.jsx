import React from 'react';
import { connect } from 'react-redux';
import Logo from '../common/Logo';
import apiClient from '../../helpers/APIClient';

class UserLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {
    apiClient.isUserLoggedIn()
      .then(() => {
        apiClient.getMe()
          .then((result) => {
            const user = result.data;
            console.log(user);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        this.props.history.push({ pathname: '/' });
      });
    
  }



  render() {
    return (
      <div>
        <span>
        </span>
      </div>

    )
  }
}

export default UserLoading;
