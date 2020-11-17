export default class СurrencyService {

    _url = 'https://www.cbr-xml-daily.ru/daily_json.js';

    getResource = async (_url) => {
        const res = await fetch(_url);

        if(!res.ok) {
            throw new Error(`Could not fetch https://www.cbr-xml-daily.ru/daily_json.js` +
        `, received ${res.status}`)
        }

        return await res.json();
    }

    getСurrency = async (name) => {
        const res = await this.getResource(this._url);

        return this._transformСurrency(res.Valute[name]);
    }

    // getAllСurrency = async () => {
    //     const res = await this.getResource(this._url);        

    //     let map = new Map();
        
    //     const result = Object.entries(res.Valute);
        
    //     result.forEach(
    //         (elemet) => {
    //             map.set(elemet[0], this._transformСurrency(elemet[1]));
    //         }
    //     )
        
    //     return map;
    // }
    
    getAllСurrencyNames = async () => {
        const res = await this.getResource(this._url);

        let arr = [];

            Object.keys(res.Valute).forEach(element => {
              arr.push(element);
            });

        return arr;
    }

    
    getCurrencyStatistic = async (name) => {
        const res = await this.getResource(this._url);
        
        const prevRes = await this.getResource(res.PreviousURL);

        return {
            data: [
                prevRes.Valute[name].Previous,
                prevRes.Valute[name].Value,
                res.Valute[name].Value
            ],
            labels: [
                this._extractDate(prevRes.PreviousDate),
                this._extractDate(prevRes.Date),
                this._extractDate(res.Date)
            ]
        };
    }

    _transformСurrency(currency) {
        return {
            id: currency.ID,
            value: currency.Value.toFixed(2),
            nominal: currency.Nominal,
            charCode: currency.CharCode,
            name: currency.Name
        }
    }

    _extractDate(date) {
        const regEx = /-([0-9]*)T/;

        return String(date).match(regEx)[1];
    }
    
};
