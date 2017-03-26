'use strict'
const express = require('express')
const server = express()

// ###################### static
server.use(express.static('webroot'))

//###################### start the server
const PORT = 8080
server.listen(PORT, '0.0.0.0', function() {
	console.log('App listening on port '+PORT) 
	console.log('Press Ctrl+C to quit.')
})
 
