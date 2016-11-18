import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial';
const APIKEY = '&appid=e44c5649f45af39a98dbc84ea47e9949';

export const getTemp = function (location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}${APIKEY}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            return res.data.main.temp;
        }
    }, function (res) {
        throw new Error(res.data.message);
    });
};
