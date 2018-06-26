// This is an example for MongoDB and mongoose
const mongoose = require('mongoose'),
      Schema = mongoose.Schema

const UserSchema = new Schema({
  name: { type: String, required: true }
})

module.exports = mongoose.model('User', UserSchema)