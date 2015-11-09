/*
 * grunt-mocha-require-phantom
 * https://github.com/accordionpeas/grunt-mocha-require-phantom
 *
 */

module.exports = function(grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({

        jshint: {
            all: [
                'Gruntfile.js',
                'my-module.js',
                'test/mocha-tests/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
            },
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp'],
        },

        // Configuration to be run (and then tested).
        'mocha_require_phantom': {

            options: {
                base: 'test',
                main: 'test-bootstrap',
                requireLib: 'libs/require.js',
                files: ['mocha-tests/**/*.js'],
                router: require('./test/router'),
				//keepAlive: true,
            },

            target: {
                
            }
        }
    });


    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mocha-require-phantom');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'mocha_require_phantom']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
};