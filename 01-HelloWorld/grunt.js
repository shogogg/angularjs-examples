module.exports = function(grunt) {
  grunt.initConfig({
    typescript: {
      app: {
        src: ['app/js/main.ts'],
        dest: 'app/js/main.js',
        options: {
          target: 'es5',
          sourcemap: true,
          declaration_file: true
        }
      },
      test: {
        src: ['test/*/*.ts'],
        options: {
          target: 'es5',
          sourcemap: true,
          declaration_file: true
        }
      }
    },
    clean: {
      src: [
        '*.log',
        'app/js/*.js',
        'app/js/*.map',
        'app/js/*.d.ts',
        'test/*.js',
        'test/*.map',
        'test_results/*.xml',
        'test_results'
      ]
    },
    server: {
      port: '8000',
      base: '.'
    },
    testacular: {
      unit: {
        configFile: 'test/config/testacular-unit.conf.js',
        runnerPort: 9100,
        port: 9876
      },
      e2e: {
        configFile: 'test/config/testacular-e2e.conf.js',
        runnerPort: 9101,
        port: 9877
      }
    },
    watch: {
      files: ['src/typescript/main.ts', 'test/unit/*.ts'],
      tasks: 'clean typescript'
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('gruntacular');
  grunt.registerTask('default', 'clean typescript');
  grunt.registerTask('test', 'clean typescript server testacular');
  grunt.registerTask('unit-test', 'clean typescript server testacular:unit');
  grunt.registerTask('e2e-test', 'clean typescript server testacular:e2e');
};
