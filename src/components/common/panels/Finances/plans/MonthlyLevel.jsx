import React from 'react';
import SidePanel from '../../../menu/SidePanel';
import OptionsBar from '../../News/OptionsBar';

const MonthlyLevel = () => (
  <div className="container">
    <SidePanel />
    <div className="monthlyRaport">
      <OptionsBar label="Powrót" anchor="../Finances"/>
      <div className="monthlyRaportContainer">
        <span>Raport</span>\
        <span className="raportOptions">Monitoring poziomu sprzedaży dla:
          <form>
            <select name="places">
              <option value="Wybierz placówkę">Wybierz placówkę</option>
              <option value="Lubasz">Lubasz</option>
              <option value="Poznań">Poznań</option>
              <option value="Komorniki">Komorniki</option>
            </select>
          </form>
          <span>w</span>
          <input type="month" />
        </span>
      </div>
      <div className="monthlyRaportTable">
        <div className="monthlyTable">
          <div className="monthlyRow">
            <div className="monthlyCol"><strong>Koszty stałe/mies.</strong></div>
            <div className="monthlyCol"><strong>Planowane</strong></div>
            <div className="monthlyCol"><strong>Zrealizowane</strong></div>
          </div>
          <div className="monthlyRow">
            <div className="monthlyCol">Cykl</div>
            <div className="monthlyCol">123</div>
            <div className="monthlyCol">23</div>
          </div>
          <div className="monthlyRow">
            <div className="monthlyCol">Urodzinki</div>
            <div className="monthlyCol">123</div>
            <div className="monthlyCol">23</div>
          </div>
          <div className="monthlyRow">
            <div className="monthlyCol">Eventy</div>
            <div className="monthlyCol">123</div>
            <div className="monthlyCol">23</div>
          </div>
          <div className="monthlyRow">
            <div className="monthlyCol">Świetlica</div>
            <div className="monthlyCol">123</div>
            <div className="monthlyCol">23</div>
          </div>
          <div className="monthlyRow">
            <div className="monthlyCol"><strong>Suma</strong></div>
            <div className="monthlyCol"><strong>492</strong></div>
            <div className="monthlyCol"><strong>92</strong></div>
          </div>
        </div>
        <a className="addRow" href="/AddService">Dodaj usługę</a>
      </div>
    </div>
  </div>
);

export default MonthlyLevel;
