import React from 'react';
import classnames from 'classnames';
import SidePanel from '../../menu/SidePanel';
import OptionsBar from './OptionsBar';
import apiClient from '../../../../helpers/APIClient';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: '',
      post: '',
    };
  }

  show() {
    apiClient.getNews();
  }

  isSelected(name) {
    return this.state.optionSelected === name ? 'selected' : '';
  }
  render() {

    const { optionSelected } = this.state;
    const { doOnClick } = this.props;

    return (
      <div className="container">
        <SidePanel />
        <div className="newsList">
          <OptionsBar label="Dodawanie aktualności" anchor="./NewsForm"/>
          <ul>
            {this.show()}
          </ul>
        </div>
      </div>
    )
  }
}

export default News;
