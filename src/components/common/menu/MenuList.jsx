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
        <MenuItem doOnClick={this.onClick.bind(this)} label="Aktualności" selected={this.isSelected('Aktualności')} anchor="News"/>
        <MenuItem doOnClick={this.onClick.bind(this)} label="Dane o placówkach" selected={this.isSelected('Dane o placówkach')} anchor="FacilityData"/>
        <MenuItem doOnClick={this.onClick.bind(this)} label="Dokumenty" selected={this.isSelected('Dokumenty')} anchor="Documents"/>
        <MenuItem doOnClick={this.onClick.bind(this)} label="Forum" selected={this.isSelected('Forum')} anchor="Forum"/>
        <MenuItem doOnClick={this.onClick.bind(this)} label="Kalendarz" selected={this.isSelected('Kalendarz')} anchor="Calendar"/>
        <MenuItem doOnClick={this.onClick.bind(this)} label="Finanse" selected={this.isSelected('Finanse')} anchor="Finance"/>
        <MenuItem doOnClick={this.onClick.bind(this)} label="Raporty" selected={this.isSelected('Raporty')} anchor="Raports"/>
      </div>
    )
  }
}

export default MenuList;
