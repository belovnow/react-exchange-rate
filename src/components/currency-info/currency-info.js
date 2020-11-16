import React from 'react';
import './currency-info.css';

const CurrencyInfo = ({ currency }) => {


    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="block currency-information">
                    <span className="char-code">{currency.charCode} </span>
                    <div>
                        <div className="nom-and-name">{currency.nominal} {currency.name} </div>
                        <div className="currency-value">{currency.value}</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="block">
                    <span>Здесь будут графики</span>
                </div>
            </div>
        </div>
    );
}

export default CurrencyInfo;