import React, { Component } from 'react';

import CurrencyService from '../../service/currency-service';

import './currency-buttons.css';

export default class CurrencyButtons extends Component {

  currencyService = new CurrencyService();

  state = {
    allCurrencyNames: []
  };

  componentDidMount() {

    this.currencyService.getAllСurrencyNames()
      .then(
        (allCurrencyNames) => {
          this.setState({ allCurrencyNames });
        }
      )
  };


  render() {

    const { allCurrencyNames } = this.state;
    const { changeCurrency } = this.props;

    const elements = allCurrencyNames.map((item) => {

      return (
        <div className="col-lg-2">
          <div className="currency-button"
            onClick={() => changeCurrency(item)}>
            {item}
          </div>
          </div>
      );
    })

    return (
      <div className="row button-row">
        {elements}
        </div>
    );
  }

};