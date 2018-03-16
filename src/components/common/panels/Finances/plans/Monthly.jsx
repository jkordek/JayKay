import React from 'react';
import SidePanel from '../../../menu/SidePanel';

class Monthly extends React.Component {
    render() {
        return (
            <div className="container">
                <SidePanel />
                <div className="monthlyRaport">
                    
                    <div>
                    <span>Raport</span>
                        <div className="raportDesc">
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
                </div>
            </div>
           
        )
    }
}

export default Monthly;
