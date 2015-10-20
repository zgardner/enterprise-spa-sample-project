/**
 * This configuration object is used to configure the grunt-browserify task.
 *
 * @public
 */
var browserify = {};

browserify.webapp = {
    files: {
        'dist/webapp/js/webapp.js': 'src/main/webapp/webapp.js'
    }
};

module.exports = browserify;