module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Intl.js']
        },
        uglify: {
            options: {
                preserveComments: 'some'
            },
            build: {
                files: {
                    'Intl.min.js': ['Intl.js']
                }
            }
        },
        'compile-data': {
            all: {
                src: 'locale-data/json/*.json',
                dest: 'locale-data/json',
                expand: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadTasks('tasks');

    grunt.registerTask('build', ['jshint','uglify']);
    grunt.registerTask('default', ['build']);
};
