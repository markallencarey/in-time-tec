import axios from "axios"
import React, { useEffect, useState } from "react"
import { Container, Image } from 'react-bootstrap'

const Weather = () => {

  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios.get('http://localhost:4999/api/weather').then(res => {
      setWeather(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const tempF = ((((weather.temp - 273.15) * 9) / 5) + 32).toFixed(0)
  const tempMaxF = ((((weather.temp_max - 273.15) * 9) / 5) + 32).toFixed(0)
  const tempMinF = ((((weather.temp_min - 273.15) * 9) / 5) + 32).toFixed(0)

  return (
    <Container className='Weather'>
      <Container className='weather-temps'>
        <h1>{tempF}°</h1>
        <h4>High: {tempMaxF}°</h4>
        <h4>Low: {tempMinF}°</h4>
      </Container>
      <Container className='weather-description'>
        <h3>{weather.description}</h3>
        <Image className='weather-icon' src={weather.icon} />
      </Container>
    </Container>
  )
}

export default Weather

/* weather object {
  temp,
  temp_max,
  temp_min,
  description,
  icon
 } */