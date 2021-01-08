import React, { useContext } from 'react';
import Context from '../context';

import './currency-info.css';

const CurrencyInfo = () => {

    const [context, setContext] = useContext(Context);

    if (!context) {
        return (
            <div className="currency-information">
                <span className="currency-information not-load">
                    Выберите валюту
                </span>
            </div>
        );
    }

    const { charCode, name, nominal, value } = context;

    return (
        <div className="currency-information">
            <span className="currency-name">{nominal} {name}</span>
            <div className="currency-nominal">
                <span>{charCode}</span>
                <span>{value} ₽</span>
            </div>
        </div>
    );
}

export default CurrencyInfo;