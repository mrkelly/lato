module.exports = function (grunt) {

    grunt.initConfig ({
        pkg : grunt.file.readJSON('package.json'),

        clean: ['css'],

        less:{
            app:{
                options: {
                    paths: ['less']
                },
                files : {
                    'css/lato.css': 'less/lato.less'
                }
            }
        },

        cssmin :{
            app : {
                files : {
                    'css/lato.min.css': 'css/lato.css'
                }
            }
        }
    });

    // Load NPM Tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default Task Validates Less and Builds CSS for dist
    grunt.registerTask("default", ['clean', 'less', 'cssmin']);
};
