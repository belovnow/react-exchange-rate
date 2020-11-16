export default class СurrencyService {

    // _url = 'https://www.cbr-xml-daily.ru/daily_json.js';

    getResource = async () => {
        const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');

        if(!res.ok) {
            throw new Error(`Could not fetch https://www.cbr-xml-daily.ru/daily_json.js` +
        `, received ${res.status}`)
        }

        return await res.json();
    }

    getСurrency = async (name) => {
        const res = await this.getResource();

        return this._transformСurrency(res.Valute[name]);
    }

    getAllСurrency = async () => {
        const res = await this.getResource();        

        let map = new Map;
        
        const result = Object.entries(res.Valute);
        
        result.forEach(
            (elemet) => {
                map.set(elemet[0], this._transformСurrency(elemet[1]));
            }
        )
        
        return map;
    }
    
    getAllСurrencyNames = async () => {
        const res = await this.getResource();

        let arr = [];

            Object.keys(res.Valute).forEach(element => {
              arr.push(element);
            });

        return arr;
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
    
};
