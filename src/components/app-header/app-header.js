import React, { Component } from 'react';

import CurrencyService from '../../service/currency-service';
import CurrencyInfo from '../currency-info';

import './app-header.css';

export default class AppHeader extends Component {

  currencyService = new CurrencyService();

  state = {
    currentСurrency: null,
    currency: {}
  }

  componentDidMount() {
    this.updateCurrency();
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentСurrency !== prevProps.currentСurrency) {
    this.updateCurrency();
    }
  }

  updateCurrency() {
    const { currentСurrency } = this.props;

    if (!currentСurrency) {
      return;
    }

    this.currencyService.getСurrency(currentСurrency)
      .then((currency) => {
        this.setState({ currency, currentСurrency });
      });
  }

  render() {

    const { currency } = this.state;

    return (
      <CurrencyInfo currency={currency}/>
    );
  }
}