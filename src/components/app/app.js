import React, { useEffect, useState } from 'react';

import ChartBlock from '../chart-block';
import CurrencyService from '../../service/currency-service';
import CurrencyInfo from '../currency-info';
import CurrencyCardList from '../currency-card-list/currency-card-list';
import ErrorBoundry from '../error-boundry';
import Context from '../context';
import FooterLinks from '../footer-links';

import './app.css';

const App = () => {

    const currencyService = new CurrencyService();

    // Получение данных из API
    useEffect(() => {
        currencyService.getAllСurrency()
            .then((currency) => {
                setData(currency);
            })
    }, []);

    // data хранит массив всех валют
    const [data, setData] = useState([]);
    const [context, setContext] = useState(undefined);

    return (
        <Context.Provider value={[context, setContext]}>
            <ErrorBoundry>
                <div className="app">
                    <CurrencyInfo />
                    <ChartBlock />
                    <CurrencyCardList
                        data={data} />
                    <FooterLinks />
                </div>
            </ErrorBoundry>
        </Context.Provider>
    );
}

export default App;