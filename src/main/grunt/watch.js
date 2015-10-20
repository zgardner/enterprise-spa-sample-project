/**
 * This object configures the grunt-contrib-watch task.
 *
 * @public
 */
var watch = {};
 
watch.webapp = {
    files: [
        'src/main/webapp/**/*.*',
        '!src/main/webapp/server.js'
    ],
    tasks: [
        'build:webapp'
    ]
};
 
module.exports = watch;