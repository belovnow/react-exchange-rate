import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import CurrencyButtons from '../currency-buttons/currency-buttons';

import './app.css';

export default class App extends Component {

    state = {
        currentСurrency: null
    };
 
    changeCurrency = (charCode) => {
        this.setState({
            currentСurrency: charCode
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader currentСurrency={this.state.currentСurrency} />
                <CurrencyButtons changeCurrency={this.changeCurrency} />
            </div>
        );
    }
}
