import React from 'react';
import classnames from 'classnames';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: ''
    };
  }

  doOnClick(name) {
    this.setState({
      optionSelected: name,
    });
  }

  isSelected(name) {
    return this.state.optionSelected === name ? 'selected' : '';
  }
  render() {

    const { optionSelected } = this.state;

    return (
      <div className="newsPanel">
        <div className="optionsBar">
          <button onClick={(event) => doOnClick('Lista aktualności')} className={classnames('newsList', { 'clicked': this.isSelected('Lista aktualności')})}>
            Lista aktualności
          </button>
          <button className={classnames('addNews', { 'clicked': this.isSelected('Dodawanie aktualności')})}>
            Dodawanie aktualności
          </button>
        </div>
        <div className="newsContent">

        </div>
      </div>
    )
  }
}

export default News;
