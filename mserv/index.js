"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const middle = express();
middle.use(bodyParser.json());
const compression = require('compression');
middle.use(compression());
middle.use(cors());
middle.get('/', function (req, res) {
    res.send('nothing to see here');
});
const membersPg = require('./route/membersPg');
middle.use('/membersPg', membersPg);
const PORT = 8083;
middle.listen(PORT, '0.0.0.0', function () {
    console.log('App listening on port ' + PORT);
    console.log('Press Ctrl+C to quit.');
});
//# sourceMappingURL=index.js.map