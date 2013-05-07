module.exports = function(grunt) {
  grunt.initConfig({

    uglify: {
      options: {
        preserveComments: 'some'
      },
      my_target: {
        files: {
          'scripts/ekwal.min.js':        ['scripts/ekwal.js'],
          'scripts/jquery.ekwal.min.js': ['scripts/jquery.ekwal.js']
        }
      }
    },

    jshint: {
      options: {
        force: true
      },
      all: ['Gruntfile.js', 'scripts/ekwal.js', 'scripts/jquery.ekwal.js', 'scripts/main.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'uglify']);

};
