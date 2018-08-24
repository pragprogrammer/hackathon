let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Comment'

let schema = new Schema({
  description: {
    type: String,
    required: true
  },
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  imgUrl: {
    type: String
  },
  timestamp: {
    type: String,
    default: Date.now()
  },
  vote: {
    type: Number,
    default: 0
  }
  //vote type something else?
})

module.exports = mongoose.model(schemaName, schema)