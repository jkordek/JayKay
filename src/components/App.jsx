import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import '../assets/styles/app.sass';

class App extends React.Component {
  render() {
    const { route } = this.props;
    return (
      <div className="App">
        <Helmet titleTemplate="%s &bull; PISOP" >
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
        </Helmet>

        {renderRoutes(route.routes)}
      </div>
    );
  }
}

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
}

export default App;
