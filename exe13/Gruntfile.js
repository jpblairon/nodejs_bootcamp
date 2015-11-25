module.exports = function(grunt) {

  // Project configuration. Initialise les taches
  grunt.initConfig({
    //VAriables
    files: {
      js:['src/js/**/*.js'],
      destination:'dist/'
    },
    //Task
    // compile les js et les copye dans dist/js/main.min.js
    uglify: {
        dist: {
          files: {
            'dist/js/main.min.js': ['<%= files.js %>']
          }
        }
      },
      // copie les html dans dist/
      copy: {
        dist: {
          files: [{
            expand: true,
            cwd: 'src/',
            src: ['*.html'],
            dest: '<%= files.destination %>'
          }],
        },
      },

      // serveur
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
          base: '<%= files.destination %>',
          }
        }
      },

      //
    watch: {
      options:{
        livereload: true,
      },
      js: {
        files: ['<%= files.js %>'],
        tasks: ['uglify:dist'],
        },
      html: {
        files: ['src/*.html'],
        tasks: ['copy:dist'],
        }
      },
  });


  // Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify'); // concatène les fichiers js
grunt.loadNpmTasks('grunt-contrib-copy'); // copie les fichiers
grunt.loadNpmTasks('grunt-contrib-connect'); // pour le serveur
grunt.loadNpmTasks('grunt-contrib-watch'); // relance le grunt à chaque modif
  // Default task(s).
grunt.registerTask('default', ['uglify:dist', 'copy:dist', 'connect', 'watch']);
};
