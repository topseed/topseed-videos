"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const middle = express();
middle.use(bodyParser.json()); // parse application/json
const compression = require("compression");
middle.use(compression());
middle.use(cors());
// ###################### 
middle.get('/', function (req, res) {
    res.send('nothing to see here');
});
//routes ###################### 
const membersPg = require("./route/membersPg");
middle.use('/membersPg', membersPg); //front route 1 - match the front end
//###################### 
// start the service
const PORT = 8083;
middle.listen(PORT, '0.0.0.0', function () {
    console.log('App listening on port ' + PORT);
    console.log('Press Ctrl+C to quit.');
});
//# sourceMappingURL=index.js.map