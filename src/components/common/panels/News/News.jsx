import React from 'react';
import classnames from 'classnames';
import SidePanel from '../../menu/SidePanel';
import OptionsBar from './OptionsBar';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: ''
    };
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
            <li><a className='newsListItem' href="/panels/News/NewsItem">Testowy news 1</a></li>
            <li><a className='newsListItem' href="#">Testowy news 3</a></li>
            <li><a className='newsListItem' href="#">Testowy news 2</a></li>
            <li><a className='newsListItem' href="#">Testowy news 4</a></li>
            <li><a className='newsListItem' href="#">Testowy news 5</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default News;
