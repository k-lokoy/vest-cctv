import express from 'express'

const router = express()

router.use(express.static('client/build'))

export default router