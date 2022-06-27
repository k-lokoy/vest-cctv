import express from 'express'

const router = express()

router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://vest-cctv.herokuapp.com')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

router.use(express.static('client/build'))

export default router