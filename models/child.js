var mongoose = require('mongoose')

var childSchema = new mongoose.Schema({
  // prop: Datatype
  name: String,
  nric: String,
  age: Number
})

var Child = mongoose.model('Child', childSchema)

module.exports = Child
