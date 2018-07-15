import React from 'react';
import classnames from 'classnames';
import SidePanel from '../../menu/SidePanel';
import OptionsBar from './OptionsBar';
import apiClient from '../../../../helpers/APIClient';
import cookie from 'react-cookies';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      optionSelected: '',
      post: '',
    };

    this.logOut = this.logOut.bind(this);
  }

  componentWillMount() {
    apiClient.isUserLoggedIn()
      .then(() => {
        apiClient.getNews()
          .then((result) => {
            this.setState({
              news: result.data,
            });
          })
          .catch((e) => {
            // show some error
          })
      })
      .catch((e) => {
        this.props.history.push({ pathname: '/' });
      });
  }

  logOut(event) {
    event.preventDefault();
    cookie.remove('u');
    console.log(cookie.load('u'));
    this.props.history.push({ pathname: '/' });
    console.log('test2');
  }

  isSelected(name) {
    return this.state.optionSelected === name ? 'selected' : '';
  }

  onClick = (news) => {
    console.log(news);
    this.props.history.push({ pathname: `/News/NewsItem`, state: { news } });
  }


  render() {

    const { optionSelected } = this.state;
    const { doOnClick } = this.props;

    return (
      <div className="container">
        <SidePanel logOut={this.logOut}/>
        <div className="newsList">
          <OptionsBar label="Dodawanie aktualności" anchor="./CreateNews"/>
          <ul>
            {this.state.news.map((news) =>
              <li onClick={() => this.onClick(news)} data-id={news.id}>{news.title}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default News;
