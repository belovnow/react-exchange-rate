import React, { Component } from 'react';

import CurrencyService from '../../service/currency-service';
import ChartBlock from '../chart-block';
import CurrencyInfo from '../currency-info';

import './app-header.css';

export default class AppHeader extends Component {

  currencyService = new CurrencyService();

  state = {
    currentСurrency: null,
    currency: {},
    data: {
      labels: [],
      datasets: [{        
        data: [],
        borderColor: "#f4abc4",
        fill: false,
      }]
    }
  }

  componentDidMount() {
    this.updateCurrency();
    this.updateDatabase();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentСurrency !== prevProps.currentСurrency) {
      this.updateCurrency();
      this.updateDatabase();
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

  updateDatabase() {
    const { currentСurrency } = this.props;

    if (!currentСurrency) {
      return;
    }

    this.currencyService.getCurrencyStatistic(currentСurrency)
      .then(
        (body) => {
          this.setState({
            data: {
              labels: body.labels,
              datasets: [{
                data: body.data,
              }]
            }
          })
        })
  }

  render() {

    const { data, currency } = this.state;

    return (
      <div className="row">
        <CurrencyInfo currency={currency} />
        <ChartBlock data={data} />
      </div>
    );
  }
}