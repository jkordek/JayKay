import React from 'react';
import SidePanel from '../../menu/SidePanel';
import OptionsBar from './OptionsBar';
import apiClient from '../../../../helpers/APIClient';

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: this.props.location.state.news || {},
    };
  }

  componentWillMount() {
    apiClient.isUserLoggedIn()
      .catch((e) => {
        this.props.history.push({ pathname: '/' });
      });
  }

  render() {
    const { news } = this.state;
    return (
      <div className="container">
        <SidePanel />
        <div className="articleContainer">
          <div className="newsArticle">
            <span className="newsTitle">{news.title}</span>
            <span className="author">Autor: {news.author}</span>
            <p className="newsText">
              {news.content}
            </p>
          </div>
          <div className="downBar">
            <a href="/News"><button className="backBtn">Wróć</button></a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
