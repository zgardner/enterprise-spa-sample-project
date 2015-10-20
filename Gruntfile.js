var loadGruntConfig = require('load-grunt-config');
var path = require('path');

/**
 * The grunt configuration function to execute when grunt runs.
 *
 * @public
 * @param {Grunt} gruntInstance
 */
var gruntfile = function (gruntInstance) {
    loadGruntConfig(gruntInstance, {
        // Configure the path to be src/main/grunt/
        configPath: path.join(process.cwd(), 'src', 'main', 'grunt'),
        
        // Call gruntInstance.initConfig
        init: true
    });
    
    gruntInstance.registerTask('build:webapp', ['clean:webapp', 'browserify:webapp']);
    gruntInstance.registerTask('server:webapp', ['build:webapp', 'express:webapp', 'watch:webapp']);
};

module.exports = gruntfile;