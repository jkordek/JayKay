import React from 'react';
import classnames from 'classnames';
import SidePanel from '../../menu/SidePanel';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: ''
    };
  }

  doOnClick(name) {

    window.onload = function() {
      var newsBtn = document.getElementById({name});
      newsBtn.onclick = function(){
        if(newsBtn === 'newsList') {
          document.getElementById('listOfNews').style.display = 'flex';
          document.getElementById('addNewNews').style.display = 'none';
        } else if (newsBtn === 'addNews') {
          document.getElementById('listOfNews').style.display = 'none';
          document.getElementById('addNewNews').style.display = 'flex';
        }
      };
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

        <div className="newsPanel">
          <div className="optionsBar">
            <button id='newsList' className='newsList' onClick={this.doOnClick.bind('newsList')}>
              Lista aktualności
            </button>
            <button id='addNews' className='addNews' onClick={this.doOnClick.bind('addNews')}>
              Dodawanie aktualności
            </button>
          </div>
          <div className="newsContent">
            <div id='listOfNews' className='listOfNews'>
              test
            </div>
            <div id='addNewNews' className='addNewNews'>
              test2
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default News;
