import React from 'react';
import SidePanel from '../../menu/SidePanel';
import Menu from './Menu';

class Documents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    };
  }

  onClick(name) {
    this.setState({
      selected: name,
    });
  }

  isSelected(name) {
    return this.state.selected === name ? 'selected' : '';
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="container">
        <SidePanel />
        <div className="documentsContainer">
          <div className="documentsMenu">
            <Menu doOnClick={this.onClick.bind(this)} label="Finansowe" selected={this.isSelected('Finansowe')} />
            <Menu doOnClick={this.onClick.bind(this)} label="Pracownicze" selected={this.isSelected('Pracownicze')} />
            <Menu doOnClick={this.onClick.bind(this)} label="Promocyjne" selected={this.isSelected('Promocyjne')} />
            <Menu doOnClick={this.onClick.bind(this)} label="Formalno-Prawne" selected={this.isSelected('Formalno-Prawne')} />
          </div>
          <div className="documentsList">
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Documents;
