import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../common/Logo';
import apiClient from '../../helpers/APIClient';

class CreateStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <Logo />
        <div className="createStaff">
          <span className="title">
            Placówka w ...
          </span>
          <div className="staff">
            <span>Menadżer: </span>
            <input type="text" placeholder="Wpisz imię i nazwisko" />
            <input type="text" placeholder="Wpisz numer telefonu" />
            <input type="text" placeholder="Wpisz adres e-mail" />
          </div>
          <div className="staff">
            <span>Sprzedawca: </span>
            <input type="text" placeholder="Wpisz imię i nazwisko" />
            <input type="text" placeholder="Wpisz numer telefonu" />
            <input type="text" placeholder="Wpisz adres e-mail" />
          </div>
          <div className="staff">
            <span>Pracownik administracyjny: </span>
            <input type="text" placeholder="Wpisz imię i nazwisko" />
            <input type="text" placeholder="Wpisz numer telefonu" />
            <input type="text" placeholder="Wpisz adres e-mail" />
          </div>

        </div>
      </div>
    )
  }
}

export default CreateStaff;
