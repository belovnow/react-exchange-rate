import React, {Component} from 'react';

import CurrencyService from '../../service/currency-service';

import './currency-value-header.css';

export default class СurrencyValue extends Component {

    currencyService = new CurrencyService();
  
    state = {
      currentСurrency: 'AMD',
      currency: {}
    };
  
    componentDidMount() {
      this.currencyService.getСurrency(this.state.currentСurrency)
        .then((currency) => {
          this.setState({ currency });
        });
  
    };
  
    render() {
  
      const { currency } = this.state;
  
      return (
        <div className="currency-view">
          <span>
            1 RUB = {currency.value} {currency.charCode}
          </span>
        </div>
      );
    }
  }