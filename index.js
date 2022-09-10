import { createProxyMiddleware } from 'http-proxy-middleware'
import api from './api/index.js'

const PORT = process.env.PORT || 5000

if ('development' === process.env.NODE_ENV)
  api.use('*', createProxyMiddleware({
    target: 'http://127.0.0.1:3000',
    ws: true
  }))

api.listen(PORT, () => console.log(`App is running on port ${PORT}`))