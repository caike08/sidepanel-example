module.exports = function (grunt) {

  grunt.initConfig({

    watch: {
      sass: {
        files: '**/*.scss',
        tasks: ['css'],
        options: {
          livereload: 35729
        }
      },
      all: {
        files: ['**/*.html'],
        options: {
          livereload: true
        }
      }
    },

    cssmin: {
      build: {
        src: 'css/main.css',
        dest: 'css/main.min.css'
      }
    },

    sass: {
      dev: {
        files: {
          // destination     // source file
          'css/main.css': 'css/main.scss'
        }
      }
    }
  });

  // Default task
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('css', ['sass', 'cssmin']);

  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};