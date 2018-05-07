import React from 'react';
import classnames from 'classnames';
import SidePanel from '../../menu/SidePanel';
import OptionsBar from './OptionsBar';
import apiClient from '../../../../helpers/APIClient';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      optionSelected: '',
      post: '',
    };
  }

  componentWillMount() {
    apiClient.getNews()
      .then((result) => {
        this.setState({
          news: result.data,
        });
      })
      .catch((e) => {
        // show some error
      })
  }

  isSelected(name) {
    return this.state.optionSelected === name ? 'selected' : '';
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.history.push({ pathname: `/news/${e.target.id}` });
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
            {this.state.news.map((news) =>
              <li onClick={this.onClick} data-id={news.id}>{news.title}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default News;
