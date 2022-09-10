import express from 'express'
import fetch from 'node-fetch'

const router = new express.Router()

router.get('/', async function(req, res) {
  try {
    const uri = `https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.lon}&units=${req.query.units || 'metric'}&APPID=${process.env.OPEN_WEATHER_API_KEY}`
    const data = await fetch(uri).then(res => res.json())
    res.send(data)
  
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

export default router