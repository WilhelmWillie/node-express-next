// Import required packages
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bluebird = require('bluebird')
const config = require('../shared/config')

// Start Express server that supports Next.js SSR
const next = require('next')
const routes = require('../routes')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  // Set up database

  /*
  mongoose.Promise = bluebird
  if (process.env.NODE_ENV === 'production') {
    mongoose.connect(config.PROD.MONGO_URL)
  } else {
    mongoose.connect(config.DEV.MONGO_URL)
  }
  */

  const server = express()

  // Set up body parser
  server.use(bodyParser.json({ strict: false }))
  server.use(bodyParser.urlencoded({ extended: false }))

  // Enable API routes
  require('./api')(server)

  server
  .use(handler)
  .listen(config.SERVER_PORT, () => {
    console.log(`🚀 App server running on ${config.SERVER_HOST}:${config.SERVER_PORT} ✌️`)
  })
})
