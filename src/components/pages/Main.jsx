import React from 'react';
import { connect } from 'react-redux';
import News from '../common/panels/News/News';
import apiClient from '../../helpers/APIClient';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    apiClient.isUserLoggedIn()
      .catch((e) => {
        this.props.history.push({ pathname: '/' });
      });
  }

  render() {
    return (
      <div>
        <News />
      </div>
    )
  }
}

export default connect(null, {})(Main);
