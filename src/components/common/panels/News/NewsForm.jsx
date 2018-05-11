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
    }

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillMount() {
    apiClient.isUserLoggedIn()
      .catch((e) => {
        this.props.history.push({ pathname: '/' });
      });
  }

  submit = event => {

    const { title, author, place, content } = this.state;

    apiClient.createNews( title, author, content )
      .then((response) => {
        console.log("przeszło");
      })
      .catch((err) => {
        console.log(err);
      })
    console.log(place);
    console.log(author);
    event.preventDefault();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <SidePanel />
        <div className="newsAddForm">
          <OptionsBar label="Powrót" anchor="./News"/>
          <form onSubmit={this.submit}>
            <div className="newsForm">
              <select name="author" value={this.state.author} onChange={this.onChange}>
                <option id="1" value="Jacob">Jacob</option>
                <option id="2" value="Peter">Peter</option>
                <option id="3" value="Kasper">Kasper</option>
              </select>
              <span>Tytuł artykułu:</span>
              <input type="text" className="title" name="title" value={this.state.title} onChange={this.onChange} />
              <span>Treść artykułu</span>
              <textarea className="articleContent" name="content" value={this.state.content} onChange={this.onChange} />
            </div>
            <button className="addArticle" type="submit">Dodaj aktualność</button>
          </form>
        </div>
      </div>

    )
  }
}

export default NewsForm;
