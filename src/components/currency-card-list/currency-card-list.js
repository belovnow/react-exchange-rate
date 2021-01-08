import React from 'react';

import CurrencyCardItem from '../currency-card-item';
import Spinner from '../spinner';

import './currency-card-list.css';

const CurrencyCardList = ({ data }) => {
    
    if (!data) {
        return <Spinner />
    }

    return (
        <div className="currency-card-list">
            {
                data.map((currency) => {
                    return (
                        <li
                            key={currency.id}>
                            <CurrencyCardItem currency={currency} />
                        </li>
                    );
                })
            }
        </div>
    );
}

export default CurrencyCardList;