const axios = require('axios')
require('dotenv').config()

const { WEATHER_API } = process.env

module.exports = {
  getWeather: async (req, res) => {
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=84004,us&appid=${WEATHER_API}`).then(weather => {
      res.status(200).send({
        temp: weather.data.main.temp,
        temp_max: weather.data.main.temp_max,
        temp_min: weather.data.main.temp_min,
        description: weather.data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`
      })
    }).catch(err => {
      console.log(err)
    })
  }
}


/* weather object {
  main: {
    feels_like
    humidity
    pressure
    temp
    temp_max
    temp_min
  },
  weather: [{
    description
    icon
    id
    main
  }],
  wind: {
  
  }
 } */