module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            views:   'source/views/',
            styles:  'source/less/',
            imgs:    'source/images/',
            js:      'source/js/',
            public:  'public/'
        },
        less: {
            development: {
                options: {
                    paths: ["<%= meta.public %>css"],
                    compress: false
                },
                files: {
                    "<%= meta.public %>css/style.css": "<%= meta.styles %>style.less",
                    "<%= meta.public %>css/desktop-style.css": "<%= meta.styles %>desktop/desktop-style.less",
                    "<%= meta.public %>css/tablet-style.css": "<%= meta.styles %>tablet/tablet-style.less",
                    "<%= meta.public %>css/mobile-style.css": "<%= meta.styles %>mobile/mobile-style.less"
                }
            },
        },
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [{
                    cwd: "<%= meta.views %>",
                    src: "*.jade",
                    dest: "public",
                    ext: ".html",
                    expand: true,
                }]
            }
        },
        concat: {
            dist: {
                files: [{
                    // '<%= meta.public %>js/libs/modernizr.min.js': ['<%= meta.js %>libs/modernizr.3.3.1.js'],
                    '<%= meta.public %>js/libs/bootstrap.min.js': ['<%= meta.js %>libs/bootstrap.min.js'],
                    '<%= meta.public %>js/libs/jquery.min.js': ['<%= meta.js %>libs/jquery.min.js'],
                    '<%= meta.public %>js/libs/foundation.min.js': ['<%= meta.js %>libs/foundation.min.js'],
                    '<%= meta.public %>js/libs/plugins.min.js': ['<%= meta.js %>/libs/plugins/*.js'],
                    '<%= meta.public %>js/main.js': ['<%= meta.js %>plugins/*.js', '<%= meta.js %>main.js'],
                    '<%= meta.public %>js/home.js': ['<%= meta.js %>plugins/*.js', '<%= meta.js %>home.js']
                }]
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= meta.imgs %>',
                    src: '**/*.{png,gif,jpg,sgv, pdf}',
                    dest: '<%= meta.public %>images',
                    filter: 'isFile',
                    flatten: false
                }, {
                    expand: true,
                    src: '<%= meta.styles %>*.css',
                    dest: '<%= meta.public %>css',
                    flatten: true
                }, {
                    expand: true,
                    src: 'source/fonts/*',
                    dest: '<%= meta.public %>fonts',
                    flatten: true
                }, {
                    expand: true,
                    cwd: 'source/pdf',
                    src: '**/*',
                    dest: '<%= meta.public %>pdf',
                    filter: 'isFile',
                    flatten: false
                }]
            }
        },
        cssmin: {
            options: {
                advanced: false,
                keepBreaks: false,
                keepSpecialComments: 0
            },
            compress: {
                files: [{
                    '<%= meta.public %>css/style.css': '<%= meta.public %>css/style.css'
                }]
            }
        },
        uglify: {
            options: {
            compress: true,
            beautify: false,
            preserveComments: false
          },
          dist: {
            files: [{
              '<%= meta.public %>js/main.js': ['<%= meta.js %>main.js']
            }]
          }
        },
        connect: {
            server: {
                options: {
                    port: 8088,
                    hostname: '*',
                    base: {
                        path: '<%= meta.public %>',
                        options: {
                            index: 'index.html',
                            maxAge: 300000
                        }
                    }
                }
            }
        },
        watch: [{
            files: '<%= meta.styles %>**',
            tasks: ['less']
        }, {
            files: '<%= meta.views %>**',
            tasks: ['jade']
        }, {
            files: '<%= meta.imgs %>**',
            tasks: ['copy']
        }, {
            files: '<%= meta.js %>/**/*.js',
            tasks: ['concat', 'copy']
        }, {
            files: 'source/fonts/*',
            tasks: ['copy']
        }, {
            files: 'source/pdf/*',
            tasks: ['copy']
        }, ],
        'gh-pages': {
            options: {
              base: 'public',
              branch: 'gh-pages',
              repo: 'http://git.splashinteractive.com.sg/anna/uobp2.git',
              message: 'DWRP-24: Get Help: The email should use the same format as Live site.'
            },
            src: '**/*'
          }
    });
    grunt.file.expand('./node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
    grunt.registerTask('default', ['less', 'jade', 'concat', 'copy', 'connect:server', 'watch']);
    grunt.registerTask('release', ['less', 'jade', 'concat', 'copy', 'cssmin', 'uglify']);
};
