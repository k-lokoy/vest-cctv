import express from 'express'
import cors from 'cors'

const router = express()

router.use(cors({
  origin: ['https://vest-cctv.herokuapp.com']
}))

router.use(express.static('client/build'))

export default router