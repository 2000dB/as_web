/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

        
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**'],
                    dest: 'public/'
                }]
            }
        },

        cssmin: {
            dist: {
                options: {
                    shorthandCompacting: false
                },
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: '{,**/}*.css',
                    dest: 'public'
                }]
            }
        },

        uglify: {
            dist: {
                options: {
                },
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: ['{,**/}*.js', '!/js/jquery-ui.min.js', '!/js/jquery.min.js'],
                    dest: 'public'
                }]
            }
        },
        

        htmlmin: {                                     
            dist: {                                    
                options: {                             
                    removeComments: false,
                    collapseWhitespace: false,
                    preserveLineBreaks: false,
                },
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: '{,**/}*.html',
                    dest: 'public'
                }]
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');
    
    // grunt.registerTask('html', ['htmlmin']);
    // grunt.registerTask('css', ['cssmin']);
    // grunt.registerTask('js', ['uglify']);
    // grunt.registerTask('cp', ['copy']);

    grunt.registerTask('default', ['copy', 'htmlmin', 'cssmin', 'uglify']);
};
