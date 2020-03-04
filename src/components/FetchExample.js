import React, { Component } from 'react';
import Moneda from './monedas/Moneda.component';

class FetchExample extends Component{
    state = {bpi: {}}

    componentDidMount(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => {
                const {bpi} = data
                this.setState({ bpi })
            })
    }

    _renderCurrencies(){
        console.log(this.state.bpi);
        
        const { bpi } = this.state
        const currencies = Object.keys(bpi)     // ['EUR', 'GBP', 'USD']
        return currencies.map(currency =>(
            <Moneda key={currency}
                currency={currency}
                rate={bpi[currency].rate} />
        ))
    }

    render(){
        return(
            <div>
                <h4>Bitcoin Price Index</h4>
                <p>Tasa de conversión</p>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default FetchExample;