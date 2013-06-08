module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    transport: {
      options: {
        format: 'lucky/dist/{{filename}}',  // id format
        alias: '<%= pkg.spm.alias %>'
      },
      lucky: {
        files: {
          '.build': ['main.js', 'data.js', 'lucky.js', 'user.js']
        }
      }
    },
    concat: {
      main: {
        options: {
          relative: true  // this will include relative dependencies
        },
        files: {
          'dist/main.js': ['.build/main.js'],
          'dist/main-debug.js': ['.build/main-debug.js']
        }
      }
    },
    uglify: {
      main: {
        files: {
          'dist/main.js': ['dist/main.js']
        }
      }
    },
    clean: {
      build: ['.build']
    }
  })

  grunt.loadNpmTasks('grunt-cmd-transport');
  grunt.loadNpmTasks('grunt-cmd-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['transport', 'concat', 'uglify', 'clean']);
}
