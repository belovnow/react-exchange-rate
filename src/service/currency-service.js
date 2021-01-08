export default class СurrencyService {

    _url = 'https://www.cbr-xml-daily.ru/daily_json.js';

    getResource = async (_url) => {
        const res = await fetch(_url);

        if (!res.ok) {
            throw new Error(`Could not fetch https://www.cbr-xml-daily.ru/daily_json.js` +
                `, received ${res.status}`)
        }

        return await res.json();
    }

    getAllСurrency = async () => {
        const res = await this.getResource(this._url);
        const prevRes = await this.getResource(res.PreviousURL);

        const allCharCode = Object.keys(res.Valute);

        let result = [];

        for (let id in allCharCode) {

            const currentCharCode = allCharCode[id];
            const currencyObj = res.Valute[currentCharCode];

            let newCurrencyObj = {
                id: currencyObj.ID,
                charCode: currencyObj.CharCode,
                name: currencyObj.Name,
                nominal: currencyObj.Nominal,
                value: currencyObj.Value.toFixed(2),
                prevValue: currencyObj.Previous.toFixed(2),
                data: [
                    {
                        date: this._extractDate(prevRes.PreviousDate), value: prevRes.Valute[currentCharCode].Previous
                    },
                    {
                        date: this._extractDate(res.PreviousDate), value: currencyObj.Previous
                    },
                    {
                        date: this._extractDate(res.Date), value: currencyObj.Value
                    }
                ]
            }

            result.push(newCurrencyObj);
        }

        return result;
    }

    // Метод извлекает число из исходной строки даты
    _extractDate(date) {
        const regEx = /-([0-9]*)T/;

        return String(date).match(regEx)[1];
    }

};
