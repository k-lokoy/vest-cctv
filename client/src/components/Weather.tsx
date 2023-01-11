import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { UNITS, DIRECTIONS, UnitType } from '../data/constants'
import { VestCCTVState } from '../features/rootSlice'

interface WeatherProps {
  lat: number
  lon: number
}

interface WeatherData {
  temp: string
  humidity: string
  windSpeed: string
  windDir: string
  rain: string
}

const Weather: React.FC<WeatherProps> = ({ lat, lon }) => {
  const settings = useSelector((state: VestCCTVState) => state)
  const [ weatherData, setWeatherData ] = useState<WeatherData>()

  useEffect(function() {
    const unit = UNITS[settings.units] || UNITS[UnitType.Metric]

    fetch(`${process.env.REACT_APP_API_URI}/weather?lat=${lat}&lon=${lon}&units=${unit.name.toLowerCase()}`)
      .then(res => res.json())
      .then((data) => {
        setWeatherData({
          temp:      `${Math.round(data.main.temp)} ${unit.temp}`,
          humidity:  `${data.main.humidity}%`,
          windSpeed: `${data.wind.speed.toFixed(1)}${unit.speed}`,
          windDir:   `${DIRECTIONS[Math.floor(data.wind.deg % 360 / (360 / DIRECTIONS.length))]}`,
          rain:      `${data.rain ? data.rain?.['1h'] : 0}${unit.rain}`
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
    <p>Temp: <b>{weatherData.temp}</b></p>
    <p>Humidity: <b>{weatherData.humidity}</b></p>
    <p>Wind: <b>{weatherData.windSpeed} {weatherData.windDir}</b></p>
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

export default Weather