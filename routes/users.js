var express = require('express')
var router = express.Router()

var Child = require('../models/child')
var Parent = require('../models/parent')

var newChild = new Child({
    name: "Gerald",
    nric: "T123123E",
    age: 1
  })

var newParent = new Parent({
    name: "julian",
    nric: "S131231E",
    Address: "100 Jurong East Singapore 123445",
    // child: [newChild]
  })

  router.get('/new', function (req, res) {
  res.send('edit info')
})

router.get('/parent', function (req, res) {
  // all users view under INDEX.EJS
  res.render('parent')

})

router.get('/child', function (req, res) {
  // all users view under INDEX.EJS
  res.render('child')

})

  // newParent.save(function (err) {
  //   if (err) throw new Error(err)
  // })
console.log(newParent)
console.log(newChild)

module.exports = router
