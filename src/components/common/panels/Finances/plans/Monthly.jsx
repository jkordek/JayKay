import React, { Component } from 'react';
import SidePanel from '../../../menu/SidePanel';
import OptionsBar from '../../News/OptionsBar';

class Monthly extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataArr: [['usluga', '123', '123', '123', '123']],
    }

    this.onChange = this.onChange.bind(this);
    this.addRow = this.addRow.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillMount() {
    apiClient.isUserLoggedIn()
      .then()
      .catch((e) => {
        this.props.history.push({ pathname: '/' });
      });
  }

  addRow = () => {
    const newDataArr = this.state.dataArr;
    newDataArr.push([]);
    this.setState({dataArr: newDataArr});
    // return (
    // )
  }

  submit = event => {
    apiClient.createFinance( month, year, place, user, financeData, type )
      .then((response) => {
        console.log('dodane');
      })
      .catch((err) => {
        console.log(err);
      })
    event.preventDefault();
  }

  onChange(i, j) {
    return (e) => {
      const newDataArr = this.state.dataArr;
      newDataArr[i][j] = e.target.value;
      this.setState({ dataArr: newDataArr });
    }
  }

  render() {
    const { dataArr } = this.state;
    return (

      <div className="container">
        {dataArr}
        <SidePanel />
        <div className="monthlyRaport">
          <OptionsBar label="Powrót" anchor="../Finances"/>
          <div className="monthlyRaportContainer">
            <span>Raport</span>
            <span className="raportOptions">Plan sprzedaży dla:
              <form>
                <select name="places">
                  <option value="Wybierz placówkę">Wybierz placówkę</option>
                  <option value="Lubasz">Lubasz</option>
                  <option value="Poznań">Poznań</option>
                  <option value="Komorniki">Komorniki</option>
                </select>
                <input type="month" />
              </form>
            </span>
          </div>
          <div className="monthlyRaportTable">
            <div className="monthlyTable">
              <div className="monthlyRow">
                <div className="monthlyCol"><strong>Usługa</strong></div>
                <div className="monthlyCol"><strong>Liczba</strong></div>
                <div className="monthlyCol"><strong>Cena</strong></div>
                <div className="monthlyCol"><strong>Koszt</strong></div>
                <div className="monthlyCol"><strong>Przychód</strong></div>
              </div>
              {dataArr.map((arr, index) =>
                <div className="montlyRow">
                  <input type="text" name={`service${index}`} value={arr[0]} onChange={this.onChange(index, 0)} />
                  <input type="text" name={`itemsCount${index}`}  value={arr[1]} onChange={this.onChange(index, 1)} />
                  <input type="text" name={`price${index}`}  value={arr[2]} onChange={this.onChange(index, 2)} />
                  <input type="text" name={`cost${index}`}  value={arr[3]} onChange={this.onChange(index, 3)} />
                  <input type="text" name={`profit${index}`}  value={arr[4]} onChange={this.onChange(index, 4)} />
                </div>
              )}
              <div className="monthlyRow">
                <div className="monthlyCol"><strong>Suma</strong></div>
                <div className="monthlyCol"><strong>492</strong></div>
                <div className="monthlyCol"><strong>92</strong></div>
                <div className="monthlyCol"><strong>400</strong></div>
                <div className="monthlyCol"><strong>212</strong></div>
              </div>
            </div>
            <a className="addRow" href="/AddService">Dodaj usługę</a>
            <button className="addRow" onClick={this.addRow}>Dodaj wiersz</button>
            <button className="addRow" onClick={this.submit}>Zatwierdź</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Monthly;
