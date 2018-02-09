import React from 'react';
import SidePanel from '../../menu/SidePanel';
import OptionsBar from './OptionsBar';

class NewsItem extends React.Component {
  render() {
    return (
      <div className="container">
        <SidePanel />
        <div className="articleContainer">
          <div className="newsArticle">
            <span className="newsTitle">Tytuł</span>
            <p className="newsText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="downBar">
            <a href="/panels/News/News"><button className="backBtn">Wróć</button></a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
