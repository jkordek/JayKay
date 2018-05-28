import React, { Component } from 'react';
import SidePanel from '../../../menu/SidePanel';
import OptionsBar from '../../News/OptionsBar';

class AddRowMonthly extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <SidePanel />
        <div className="formCont">
          <OptionsBar label="Powrót" anchor="../Monthly" />
          <div className="form">
            <span>Formularz dodawania usług</span>
            <div className="inputClass">
              <span>Nazwa usługi:</span>
              <input type="text" />
            </div>
            <div className="inputClass">
              <span>Liczba:</span>
              <input type="text" />
            </div>
            <div className="inputClass">
              <span>Cena:</span>
              <input type="text" />
            </div>
            <div className="inputClass">
              <span>Przychód:</span>
              <input type="text" />
            </div>
            <div className="inputClass">
              <span>Koszt:</span>
              <input type="text" />
            </div>
            <button className="addService">Dodaj usługę</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddRowMonthly;
