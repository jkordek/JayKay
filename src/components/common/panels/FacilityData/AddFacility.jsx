import React from 'react';
import SidePanel from '../../menu/SidePanel';

class AddFacility extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <SidePanel />
        <div className="addFacilityContainer">
          <form className="addFacilityForm">
            <span>Miasto: </span>
            <input type="text" className="facilityAddress"/>
            <span>Adres placówki: </span>
            <input type="text" className="facilityAddress"/>
            <span>Kod pocztowy</span>
            <input type="text" className="facilityAddress"/>
            <button type="submit" className="sendFacilityForm">Wyślij</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddFacility;
