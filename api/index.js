import express from 'express'

import weatherRouter from './weather.js'

const proxy = express()

proxy.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://vest-cctv.herokuapp.com')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

proxy.use(express.static('client/build'))

proxy.use('/api/weather', weatherRouter)

export default proxy