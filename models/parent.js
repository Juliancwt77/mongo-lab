var mongoose = require('mongoose')

var parentSchema = new mongoose.Schema({
  // prop: Datatype
  name: String,
  nric: String,
  Address: String,
  // child: [childSchema]

})

var Parent = mongoose.model('Parent', parentSchema)

module.exports = Parent
