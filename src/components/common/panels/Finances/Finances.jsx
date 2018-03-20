import React from 'react';
import SidePanel from '../../menu/SidePanel';
import FinanceMenu from './FinanceMenu';

class Finances extends React.Component {
  render() {
    return (
      <div className="container">
        <SidePanel />
        <div className="financeMenuContainer">
          <div className="row">
            <FinanceMenu label="Plan miesięcznej sprzedaży" anchor="Monthly" />
            <FinanceMenu label="Plan rocznej sprzedaży" anchor="Annualy" />
            <FinanceMenu label="Plan i Realizacja" anchor="Plans" />
          </div>
          <div className="row">
            <FinanceMenu label="Monitoring poziomu sprzedaży miesięcznej" anchor="MonthlyLevel" />
            <FinanceMenu label="Monitoring poziomu sprzedaży rocznej" anchor="AnnualyLevel" />
            <FinanceMenu label="Analiza progu rentowności" anchor="Analize"/>
          </div>        
        </div>
      </div>
    )
  }
}

export default Finances;
