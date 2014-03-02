/*global module:false*/
module.exports = function(grunt) {
  // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // JavaScript Minifier. Add your files to be minified in the src array.
        // uglify: {
        //     general: {
        //         src: [

        //         ],
        //         dest: 'build/global.min.js'
        //     }
        // },

        // // CSS Minifier. Add your files to be minified in the src array.
        // cssmin: {
        //     build: {
        //         src: [
        //             'css/bootstrap.css',
        //             'css/font-awesome.css',
        //             'css/typography.css',
        //             'css/responsive-tables.css',
        //             'css/layout.css'
        //         ],
        //         dest: 'build/global.min.css'
        //     },
        //     admin: {
        //         src: [
        //             'css/admin.css'
        //         ],
        //         dest: 'build/admin.min.css'
        //     },
        //     app: {
        //         src: [
        //             'css/app.css'
        //         ],
        //         dest: 'build/app.min.css'
        //     }
        // },

        /* Compiles LESS files in res/less. Uses grunt's glob expansion to get everything in the dir.
         * You won't need to update this when you add a new file. */
        less: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'laravel/public/res/less/',
                        src: ['*.less'],
                        dest: 'laravel/public/res/css/',
                        ext: '.css'
                    }
                ]
            }
        },

        coffee: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'laravel/public/res/coffee/',
                        src: ['**/*.coffee'],
                        dest: 'laravel/public/res/js/',
                        ext: '.js'
                    }
                ]
            }
        },

        // Contains tasks to run when grunt watch is invoked. Whenever any of the files specified are modified, executes tasks specified.
        watch: {
            less: {
                files: 'laravel/public/res/less/*.less',
                tasks: 'less:dev'
            },
            coffee: {
                files: 'laravel/public/res/coffee/**/*.coffee',
                tasks: 'coffee:dev'
            }
        }
    });

    // Load plugins. Run npm install in the theme root to install these according to package.json
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task - executes when you run grunt in the theme root.
    grunt.registerTask('default', ['less']);
};