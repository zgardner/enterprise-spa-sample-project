var express = require('express');

/**
 * The server object powers the web app's server.
 *
 * @public
 */
var server = express();

server.use(express.static('dist/webapp/'));

module.exports = server;