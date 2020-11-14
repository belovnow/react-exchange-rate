import React from 'react';

import СurrencyValue from '../currency-value-header/currency-value-header';
import CurrencyButtons from '../currency-buttons/currency-buttons';


import './app.css';

const App = () => {
    return (
        <div>
            <СurrencyValue />
            <CurrencyButtons />
        </div>
    );
}

export default App;