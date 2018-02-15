import React from 'react';
import SidePanel from '../../menu/SidePanel';
import OptionsBar from './OptionsBar';

class NewsForm extends React.Component {
  render() {
    return (
      <div className="container">
        <SidePanel />
        <div className="newsAddForm">
          <OptionsBar label="Powrót" anchor="./News"/>
          <div className="newsForm">
            <span>Tytuł artykułu:</span>
            <input type="text" className="title" />
            <span>Treść artykułu</span>
            <textarea rows="10" cols="70" className="articleContent" />
          </div>
          <button className="addArticle">Dodaj aktualność</button>
        </div>
      </div>

    )
  }
}

export default NewsForm;
