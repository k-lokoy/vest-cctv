import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import {
  DIRECTIONS,
  TEMP_UNITS,
  RAIN_AMOUNT_UNITS,
  WIND_SPEED_UNITS,
} from '../data/constants'

export default function Weather({ lat, lon }) {
  const settings = useSelector((state) => state)
  const [ weatherData, setWeatherData ] = useState(null)

  useEffect(function() {
    fetch(`${process.env.REACT_APP_API_URI}/weather?lat=${lat}&lon=${lon}&units=${settings.units}`)
      .then(res => res.json())
      .then((data) => {
        setWeatherData({
          temp:      `${Math.round(data.main.temp)} ${TEMP_UNITS[settings.units]}`,
          humidity:  `${data.main.humidity}%`,
          windSpeed: `${data.wind.speed.toFixed(1)}${WIND_SPEED_UNITS[settings.units]}`,
          windDir:   `${DIRECTIONS[Math.floor(data.wind.deg % 360 / (360 / DIRECTIONS.length))]}`,
          rain:      `${data.rain ? data.rain?.['1h'] : 0}${RAIN_AMOUNT_UNITS[settings.units]}`
        })
      })
      .catch(console.error)
  }, [settings, lat, lon])
  
  if (!weatherData)
    return (<StyledWeatherContainer>
      <h2>Weather</h2>
    </StyledWeatherContainer>)

  return (<StyledWeatherContainer>
    <h2>Weather</h2>
    <p>{weatherData.status}</p>
    <p>Temp: <b>{weatherData.temp}</b></p>
    <p>Humidity: <b>{weatherData.humidity}</b></p>
    <p>Wind: <b>{weatherData.windSpeed} {weatherData.windDirection}</b></p>
    <p>Rain: <b>{weatherData.rain}</b></p>
  </StyledWeatherContainer>)
}

const StyledWeatherContainer = styled.div`
  padding: 1em;
  border-block-end: .128em solid var(--color--300);
  display: grid;
  gap: .5em;
  min-height: 8rem;

  h2 {
    font-size: 1rem;
  }

  @media (min-width: 48em) {
    justify-items: space-between;

    p {
      font-size: .75rem;
    }

    p:nth-child(2) {
      font-size: 1rem;
    }
  }

  p {
    margin: 0;
  }

  @media (min-width: 64em) {
    grid-template-columns: repeat(2, minmax(50%, 1fr));

    h2,
    p:nth-child(2) {
      grid-column: 1 / 3;
    }
  }
`