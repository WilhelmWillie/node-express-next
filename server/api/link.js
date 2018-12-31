const express = require('express')
const router = express.Router()

const Link = require('../models/Link')

router.get('/', (req, res) => {
  res.json({
    message: 'Link Index'
  })
})

module.exports = router
