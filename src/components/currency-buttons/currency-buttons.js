import React, {Component} from 'react';

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
            this.setState({allCurrencyNames});
          }
        )
    }
  
    render() {
  
      const { allCurrencyNames } = this.state;
  
      const elements = allCurrencyNames.map((item)=> {
  
        return (
            <button>{item}</button>
        );
      })
  
      return (
        <ul>
          {elements}
        </ul>
      );
    }
  
  };