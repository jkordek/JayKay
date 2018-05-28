import React from 'react';
import SidePanel from '../../../menu/SidePanel';
import OptionsBar from '../../News/OptionsBar';

const Monthly = () => (
  <div className="container">
    <SidePanel />
    <div className="monthlyRaport">
      <OptionsBar label="Powrót" anchor="../Finances"/>
      <div className="monthlyRaportContainer">
        <span>Raport</span>
        <span className="raportOptions">Monitoring poziomu sprzedaży dla:
          <form>
            <select name="places">
              <option value="Wybierz placówkę">Wybierz placówkę</option>
              <option value="Lubasz">Lubasz</option>
              <option value="Poznań">Poznań</option>
              <option value="Komorniki">Komorniki</option>
            </select>
          </form>
        </span>
      </div>
      <div className="monthlyRaportTable">
        <div className="monthlyTable">
          <div className="monthlyRow">
            <div className="monthlyCol">Usługa</div>
            <div className="monthlyCol">Liczba</div>
            <div className="monthlyCol">Cena</div>
            <div className="monthlyCol">Koszt</div>
            <div className="monthlyCol">Przychód</div>
          </div>
        </div>
      </div>
      <a className="addRow">Dodaj wiersz</a>
    </div>
  </div>
);

export default Monthly;
