import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import ChartBlock from '../chart-block';
import CurrencyService from '../../service/currency-service';
import CurrencyButtons from '../currency-buttons/currency-buttons';
import SearchPanel from '../search-panel';

import './app.css';

export default class App extends Component {

    currencyService = new CurrencyService();

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
                <SearchPanel />
                <CurrencyButtons changeCurrency={this.changeCurrency} />
            </div>
        );
    }
}
