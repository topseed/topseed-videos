'use strict'
const express = require('express')
const server = express()

// ###################### 

/* optional:
const scribe = require('scribe-js')()
const console = process.console
server.use(scribe.express.logger()) //Log each request for now
server.use('/logs', scribe.webPanel())
const debug = require('debug')('my-app')
debug('oh hi')
*/

// ###################### static
server.use(express.static('webroot'))

//###################### start the server
const PORT1 = 8080
server.listen(PORT1, '0.0.0.0', function() {
	console.log('App listening on port '+PORT1)
	console.log('Press Ctrl+C to quit.')
})
