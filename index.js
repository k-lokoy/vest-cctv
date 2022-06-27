import { createProxyMiddleware } from 'http-proxy-middleware'
import router from './routes/router.js'

import './routes/bingreports.js'
import './routes/tweets.js'
import './routes/weather.js'

const PORT = process.env.PORT || 5000

if ('development' === process.env.NODE_ENV)
  router.use('*', createProxyMiddleware({
    target: 'http://127.0.0.1:3000',
    ws: true
  }))

router.listen(PORT, () => console.log(`App is running on port ${PORT}`))