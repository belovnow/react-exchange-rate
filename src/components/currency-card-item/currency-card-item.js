import React, { useContext } from 'react';
import Context from '../context/context';

import './currency-card-item.css';

const CurrencyCardItem = (props) => {

    const { name, charCode, value, prevValue, nominal } = props.currency;

    const [context, setContext] = useContext(Context);

    const circleStyle = (value < prevValue) ? 'state-circle red' : 'state-circle green'

    return (
        <div className="currency-card-item block"
            onClick={
                () => setContext(props.currency)}>
            <div className="currency-card-header">
                <span className={circleStyle}></span>
                <span>{charCode}</span>
            </div>
            <span style={{ margin: 'auto', fontSize: '24px' }}>{value}</span>
            <span style={{ fontSize: '14px' }}>{nominal} {name}</span>
        </div>
    );
}

export default CurrencyCardItem;