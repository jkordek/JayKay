import React from 'react';
import SidePanel from '../../menu/SidePanel';
import OptionsBar from '../News/OptionsBar';
import apiClient from '../../../../helpers/APIClient';

class AddFacility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      manager: '',
      salesman: '',
      administrator: '',
    }

    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeManager = this.handleChangeManager.bind(this);
    this.handleChangeSalesman = this.handleChangeSalesman.bind(this);
    this.handleChangeAdministrator = this.handleChangeAdministrator.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChangeCity = event => {
    this.setState({
      city: event.target.value
    });
  }

  handleChangeManager = event => {
    this.setState({
      manager: event.target.value
    });
  }

  handleChangeSalesman = event => {
    this.setState({
      salesman: event.target.value
    });
  }

  handleChangeAdministrator = event => {
    this.setState({
      administrator: event.target.value
    });
  }

  submit = event => {
    const { city, manager, salesman, administrator } = this.state;

    apiClient.postPlaces( city, manager, salesman, administrator )
      .then((response) => {
        console.log(city);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="container">
        <SidePanel />
        <div className="addFacilityContainer">
          <OptionsBar label="Powrót" anchor="./FacilityData"/>
          <form className="addFacilityForm" onSubmit={this.submit}>
            <span>Miasto: </span>
            <input type="text" className="facilityAddress" value={this.state.city} onChange={this.handleChangeCity}/>
            <span>Menadżer:</span>
            <input type="text" className="facilityAddress" value={this.state.manager} onChange={this.handleChangeManager}/>
            <span>Sprzedawca:</span>
            <input type="text" className="facilityAddress" value={this.state.salesman} onChange={this.handleChangeSalesman}/>
            <span>Pracownik administracyjny:</span>
            <input type="text" className="facilityAddress" value={this.state.administrator} onChange={this.handleChangeAdministrator}/>
            <button type="submit" className="sendFacilityForm">Wyślij</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddFacility;
