import React from 'react';
import SidePanel from '../../menu/SidePanel';

class FacilityData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <SidePanel />
        <div className="facilityData">
          <div className="facilityInfo">
            <span className="facilityDescription">
              Zespół placówki w Lubaszu:<br />
              Menadżer – Anna Nowak, 687 908 965, anna.nowak@wp.pl<br />
              Sprzedawca – Jan Kowalski, 505 202 698, jan.kowalski@wp.pl<br />
              Pracownik administracyjny – Wojciech Król, 654 786 908, wojciech.krol@wp.pl<br />
            <strong>Adres placówki:</strong> ul. Woźna 2/10, Lubasz 64-720
            </span>
            <div className="facilityMenu">
              <button className="chooseFacility">
                Wybierz placówkę
              </button>
              <div className="menuOptions">
                <ul>
                  <li>Lubasz</li>
                  <li>Komorniki</li>
                  <li>Luboń</li>
                  <li>Poznań</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="messageBar">
            <span>Wyślij wiadomoś do placówki</span>
            <textarea rows="1" cols="35"></textarea>
            <button className="selectFacility">Wybierz placówkę</button>
            <button className="sendMessage">Wyślij</button>
          </div>
        </div>
      </div>

    )
  }
}

export default FacilityData;
