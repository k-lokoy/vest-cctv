import express from 'express'
import cors from 'cors'

const router = express()

// router.use(cors)
router.options('*', cors())

export default router