import React from 'react';

const Monthly = () => (
  <div className="monthlyRaport">
    <div>
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
  </div>
);

export default Monthly;
