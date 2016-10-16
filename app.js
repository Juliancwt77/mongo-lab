
var express = require('express')
var mongoose = require('mongoose')

var users_routes = require('./routes/users')

var app = express()
var port = 4000

app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost/parent')
mongoose.Promise = global.Promise




app.use('/users', users_routes)



app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
