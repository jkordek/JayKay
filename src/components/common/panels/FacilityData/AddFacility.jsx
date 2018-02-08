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
            <input type="text" className="facilityAddress" placeholder="Miasto"/>
            <input type="text" className="facilityAddress" placeholder="Ulica"/>
            <input type="text" className="facilityAddress" placeholder="Numer budynku/miszkania"/>
            <button type="submit" className="sendFacilityForm">Wyślij</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddFacility;
