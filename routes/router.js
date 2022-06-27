import express from 'express'
import cors from 'cors'

const router = express()

router.options('*', cors())
router.use(express.static('client/build'))

export default router