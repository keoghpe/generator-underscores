module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['css/sass/*.{scss,sass}','sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'css/sass',
          src: ['*.{scss,sass}'],
          dest: 'css/',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);
};
