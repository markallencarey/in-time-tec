require('dotenv').config()
const express = require('express')
const weatherCtrl = require('./controllers/weatherController')
const quoteCtrl = require('./controllers/quoteController')
const imageCtrl = require('./controllers/imageController')
const { SERVER_PORT } = process.env

const app = express()
app.use(express.json())

app.get('/api/weather', weatherCtrl.getWeather)
app.get('/api/quote', quoteCtrl.getQuote)
app.get('/api/image', imageCtrl.getImage)

app.listen(SERVER_PORT, () => {
  console.log(`Server ready on port ${SERVER_PORT}`)
})