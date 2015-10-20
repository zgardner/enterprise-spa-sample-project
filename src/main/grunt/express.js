/**
 * This is the configuration object for the grunt-express-server task.
 *
 * @class
 */
var expressServer = {};

expressServer.webapp = {
    options: {
        script: 'src/main/webapp/server.js'
    }
};

module.exports = expressServer;