import react, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../common/Logo';
import apiClient from '../../helpers/APIClient';

class UserLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {
    apiClient.getMe()
      .then((result) => {
        const user = result.data;
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
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
