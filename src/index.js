import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ValueService from './service/value-service';

import './index.css';

class ValuteValue extends Component {

  valueService = new ValueService();

  state = {
    valuteValue: null,
    valuteCharCode: null
  }

  componentDidMount() {
    this.valueService.getResource('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((body) => {
        console.log(body);
        this.setState({
          valuteValue: body.Valute.USD.Value,
          valuteCharCode: body.Valute.USD.CharCode
        }) 
      }
      )
  }

  render() {

    const { valuteValue, valuteCharCode } = this.state;

    return (
      <div className="valute-view">
        <h4>1 Рубль равен:</h4>
        <h1>
        {valuteValue}
        </h1>
        <h2>{valuteCharCode}</h2>
      </div>
    );
  }

}

ReactDOM.render(<ValuteValue />,
  document.getElementById('root'));

