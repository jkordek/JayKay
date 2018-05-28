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
            if (user.rank == "admin") {
              this.props.history.push({ pathname: '/News'});
            } else {
              this.props.history.push({ pathname: '/CreateStaff'});
            }
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
      </div>

    )
  }
}

export default UserLoading;
