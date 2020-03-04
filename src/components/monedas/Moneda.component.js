import React, { Component } from 'react';

class Moneda extends Component{
    render(){
        return (
            <div key={this.props.currency}>
                1 BTC is {this.props.rate}
                <span> {this.props.currency}</span>
            </div>
        )
    }
}

export default Moneda