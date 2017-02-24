import express = require('express')
import bodyParser = require('body-parser')
import cors = require('cors')
const middle = express()
middle.use(bodyParser.json()) // parse application/json
import compression = require('compression')
middle.use(compression())
middle.use(cors())

// ###################### 

middle.get('/', function (req, res) {
  res.send('nothing to see here')
})

//routes ###################### 
import membersPg = require('./route/membersPg')
middle.use('/membersPg', membersPg) //front route 1 - match the front end

//###################### 
// start the service
const PORT = 8083
middle.listen(PORT, '0.0.0.0', function() {
	console.log('App listening on port '+ PORT)
	console.log('Press Ctrl+C to quit.')
})



