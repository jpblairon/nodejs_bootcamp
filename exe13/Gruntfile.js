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
            '<%= files.destination %>js/main.min.js': ['<%= files.js %>']
          }
        }
      },

      // gère les fichiers hbs
      handlebarslayouts: {
        dist: {
          files: {
            'dist/*.html': 'src/hbs/pages/*.hbs'
          },
          options: {
            partials: [
              'src/hbs/partials/*.hbs'
            ],
            context: "src/hbs/datas.json"
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
      // sass to css
      compass: {                  // Task
          dist: {                   // Target
            options: {              // Target options
              sassDir: 'src/sass',
              cssDir: 'dist/css',
              environment: 'production'
            }
            }
          },
      // compression d'images
    imagemin: {
      dist: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'src/',                   // Src matches are relative to this path
        src: ['images/**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: '<%= files.destination %>'      // Destination path prefix
      }]
    }
    },

      // serveur
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*', //pour les connection mobile
          base: '<%= files.destination %>',
          }
        }
      },

      // relance uglify quand l'html change
    watch: {
      options:{
        livereload: true,  //rafraichit le code dynamiquement
      },
      js: {
        files: ['<%= files.js %>'],
        tasks: ['uglify:dist'],
        },

    // sass to css
    sass: {
        files: ['src/sass/**/*.scss'],
        task: ['compass:dist'],
      },
      hbs: {
        files: ['src/hbs/**/**/*.hbs', 'src/hbs/**/**/*.json'],
        tasks: ['handlebarslayouts'],
        }
      },

  });

  // Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify'); // concatène les fichiers js
grunt.loadNpmTasks('grunt-contrib-copy'); // copie les fichiers
grunt.loadNpmTasks('grunt-contrib-connect'); // pour lancer le serveur
grunt.loadNpmTasks('grunt-contrib-watch'); // relance le grunt à chaque modif
grunt.loadNpmTasks('grunt-contrib-imagemin'); // compresse les images
grunt.loadNpmTasks('grunt-contrib-compass'); // sass to css
grunt.loadNpmTasks('grunt-handlebars-layouts'); // gere les hbs
  // Default task(s).
grunt.registerTask('default', ['uglify:dist', 'handlebarslayouts', 'compass', 'connect', 'watch']);
grunt.registerTask('push2prod', ['clean', 'uglify:dist', 'handlebarslayouts', 'compass', 'ftpush:prod']);
};
