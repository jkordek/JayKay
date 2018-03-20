import React from 'react';
import SidePanel from '../../menu/SidePanel';
import OptionsBar from './OptionsBar';
import apiClient from '../../../../helpers/APIClient';

class NewsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      content: '',
      place: '',
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangePlace = this.handleChangePlace.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChangeTitle = event => {

    this.setState({
      title: event.target.value
    });
  }

  handleChangePlace = event => {
    this.setState({
      place: event.target.value
    });
  }

  handleChangeAuthor = event => {
    this.setState({
      author: event.target.value
    });
  }

  handleChangeContent = event => {
    this.setState({
      content: event.target.value
    });
  }

  submit = event => {

    const { title, author, place, content } = this.state;

    apiClient.postArticle( title, author, place, content )
      .then((response) => {
        // console.log();
      })
      .catch((err) => {
        console.log(err);
      })
    console.log(place);
    console.log(author);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <SidePanel />
        <div className="newsAddForm">
          <OptionsBar label="Powrót" anchor="./News"/>
          <form onSubmit={this.submit}>
            <div className="newsForm">
              <select name="places" value={this.state.place} onChange={this.handleChangePlace}>
                <option id="1" value="Luboń">Luboń</option>
                <option id="2" value="Komorniki">Komorniki</option>
                <option id="3" value="Lubasz">Lubasz</option>
              </select>
              <select name="author" value={this.state.author} onChange={this.handleChangeAuthor}>
                <option id="1" value="Jacob">Jacob</option>
                <option id="2" value="Peter">Peter</option>
                <option id="3" value="Kasper">Kasper</option>
              </select>
              <span>Tytuł artykułu:</span>
              <input type="text" className="title" name="title" value={this.state.title} onChange={this.handleChangeTitle} />
              <span>Treść artykułu</span>
              <textarea className="articleContent" name="content" value={this.state.content} onChange={this.handleChangeContent} />
            </div>
            <button className="addArticle" type="submit">Dodaj aktualność</button>
          </form>
        </div>
      </div>

    )
  }
}

export default NewsForm;
