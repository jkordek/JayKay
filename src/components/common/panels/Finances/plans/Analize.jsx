import React from 'react';
import SidePanel from '../../../menu/SidePanel';
import OptionsBar from '../../News/OptionsBar';

const Analize = () => (
  <div className="container">
    <SidePanel />
    <div className="monthlyRaport">
      <OptionsBar label="Powrót" anchor="../Finances"/>
      <div className="monthlyRaportContainer">
        <span>Raport</span>\
        <span className="raportOptions">Analiza progu rentowności dla:
          <form>
            <select name="places">
              <option value="Wybierz placówkę">Wybierz placówkę</option>
              <option value="Lubasz">Lubasz</option>
              <option value="Poznań">Poznań</option>
              <option value="Komorniki">Komorniki</option>
            </select>
          </form>
          <span>za</span>
          <input type="month" />
        </span>
      </div>
      <div className="monthlyRaportTable">
        <div className="monthlyTable">
          <div className="monthlyRow">
            <div className="monthlyCol"><strong>Styczeń - Grudzień</strong></div>
            <div className="monthlyCol"><strong>Koszty</strong></div>
          </div>
          <div className="monthlyRow">
            <div className="monthlyCol">1233</div>
            <div className="monthlyCol">123</div>
          </div>
          <div className="monthlyRow">
            <div className="monthlyCol">Urodzinki</div>
            <div className="monthlyCol">123</div>
          </div>
        </div>
        <a className="addRow" href="/AddService">Dodaj usługę</a>
      </div>
    </div>
  </div>
);

export default Analize;
