import React from 'react';

const Monthly = () => (
  <div className="monthlyRaport">
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
    <button className="addRow">Dodaj wiersz</button>
  </div>
);

export default Monthly;
