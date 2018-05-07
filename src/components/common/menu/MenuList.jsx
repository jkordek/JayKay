import React from 'react';
import MenuItem from './MenuItem';

class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    };
    this.onClick = this.onClick.bind(this);
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
        <MenuItem doOnClick={this.onClick} label="Aktualności" selected={this.isSelected('Aktualności')} anchor="News"/>
        <MenuItem doOnClick={this.onClick} label="Dane o placówkach" selected={this.isSelected('Dane o placówkach')} anchor="FacilityData"/>
        <MenuItem doOnClick={this.onClick} label="Dokumenty" selected={this.isSelected('Dokumenty')} anchor="Documents"/>
        <MenuItem doOnClick={this.onClick} label="Forum" selected={this.isSelected('Forum')} anchor="Forum"/>
        <MenuItem doOnClick={this.onClick} label="Kalendarz" selected={this.isSelected('Kalendarz')} anchor="News"/>
        <MenuItem doOnClick={this.onClick} label="Finanse" selected={this.isSelected('Finanse')} anchor="Finances"/>
        <MenuItem doOnClick={this.onClick} label="Raporty" selected={this.isSelected('Raporty')} anchor="News"/>
        <MenuItem doOnClick={this.onClick} label="Użytkownicy"
        selected={this.isSelected('Użytkownicy')} anchor="Users"/>
      </div>
    )
  }
}

export default MenuList;
