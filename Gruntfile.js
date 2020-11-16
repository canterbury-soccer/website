module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-text-replace');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    replace: {
      email: {
        src: ['_grunt_templates/*.yml'],             // source files array (supports minimatch)
        dest: '_data/',             // destination directory or file
        replacements: [{
          from: '@@email',                   // string replacement
          to: 'canterburysoccer@gmail.com'
        }]
      }
    }
  });

  grunt.registerTask('default', 'replace');
};
