var axios = require('axios');
var {openWeatherMapKey} = require('keys');

// const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=${openWeatherMapKey}`;
// const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=${process.env.OPENWEATHERMAP || openWeatherMapKey}`;
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=bbd1b75d8f469372c4fe6d64271a802c';



module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message)
    });
  }
}
