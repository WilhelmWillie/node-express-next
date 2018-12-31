const mongoose = require('mongoose')

const LinkSchema = new mongoose.Schema({
  title: String,
  upvotes: Number,
  link: String,
  createdAt: Date
})

module.exports = mongoose.model('Link', LinkSchema)
