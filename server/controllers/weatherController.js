const axios = require('axios')
require('dotenv').config()

const { WEATHER_API } = process.env

module.exports = {
  getWeather: async (req, res) => {
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=84004,us&appid=${WEATHER_API}`).then(weather => {
      res.status(200).send(weather.data)
    }).catch(err => {
      console.log(err)
    })
  }
}