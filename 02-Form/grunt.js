module.exports = function(grunt) {
  grunt.initConfig({
    typescript: {
      app: {
        src: ['app/js/*.ts'],
        dest: 'app/js/main.js',
        options: {
          sourcemap: true,
          declaration_file: true
        }
      },
      test: {
        src: ['test/*/*.ts'],
        options: {
          sourcemap: true,
          declaration_file: true
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ["src/less"]
        },
        files: {
          "app/css/main.css": "src/less/main.less"
        }
      }
    },
    clean: {
      src: [
        '*.log',
        'app/js/*.js',
        'app/js/*.map',
        'app/js/*.d.ts',
        'app/css/*.css',
        'test/unit/*.js',
        'test/unit/*.map',
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
      files: ['app/js/*.ts', 'src/less/*.less', 'test/unit/*.ts'],
      tasks: 'clean typescript less'
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('gruntacular');

  grunt.registerTask('default', 'clean compile');
  grunt.registerTask('compile', 'typescript less');
  grunt.registerTask('test', 'clean compile server testacular');
  grunt.registerTask('unit-test', 'clean compile server testacular:unit');
  grunt.registerTask('e2e-test', 'clean compile server testacular:e2e');
};
