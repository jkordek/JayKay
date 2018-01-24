import React from 'react';
import MenuItem from './MenuItem';

class MenuList extends React.Component {
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
      <div className="menuList">
        <MenuItem doOnClick={this.onClick.bind(this)} label="Aktualności" selected={this.isSelected('Aktualności')}/>
        <MenuItem doOnClick={this.onClick.bind(this)} label="Dane o placówkach" selected={this.isSelected('Dane o placówkach')}/>
        <MenuItem doOnClick={this.onClick.bind(this)} label="Dokumenty" />
        <MenuItem doOnClick={this.onClick.bind(this)} label="Forum" />
        <MenuItem doOnClick={this.onClick.bind(this)} label="Kalendarz" />
        <MenuItem doOnClick={this.onClick.bind(this)} label="Finanse" />
        <MenuItem doOnClick={this.onClick.bind(this)} label="Raporty" />
      </div>
    )
  }
}

export default MenuList;
