import React from 'react';

class FinanceMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { label, anchor } = this.props;
        return(
            <a className="financeMenuBtn" href={"/"+anchor}>
                <div className="financeBtn">
                    {label}
                </div>
            </a>
        )
    }
}

export default FinanceMenu;
