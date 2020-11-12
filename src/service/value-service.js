export default class ValueService {

    // _url = 'https://www.cbr-xml-daily.ru/daily_json.js';

    getResource = async (url) => {
        const res = await fetch(url);
        const body = await res.json();

        return body;
    }
};
// const = "result.Valute.USD.Value"