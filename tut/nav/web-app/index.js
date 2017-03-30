'use strict'
const express = require('express')
const server = express()

// ###################### static
server.use(express.static('webroot'))

// optional:
const scribe = require('scribe-js')()
const console = process.console
server.use(scribe.express.logger()) //Log each request for now
server.use('/logs', scribe.webPanel())
const debug = require('debug')('my-app')
debug('oh hi')

//###################### start the server
const PORT = 8080
server.listen(PORT, '0.0.0.0', function() {
	console.log('App listening on port '+PORT) 
	console.log('Press Ctrl+C to quit.')
})
 
