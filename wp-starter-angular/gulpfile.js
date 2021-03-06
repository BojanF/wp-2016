/**
 *
 * Developed as a part of a project founded by Sorsix
 *
 * @Authors
 *  Tomce Delev
 *  Dragan Sahpaski
 *  Riste Stojanov
 *
 **/
var gulp = require('gulp');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var rev = require('gulp-rev-append');
var eslint = require('gulp-eslint');
var connect = require('gulp-connect');
var fs = require("fs");

var JS_APP = [
  'app/app.js',
  'app/c1/c1.state.js',
  'app/c1/first.controller.js',
  'app/c1/second.controller.js',
  'app/default-page/**.js',

  //group
  'app/group/group.state.js',
  'app/group/group.controller.js',
  //'app/group/group.local.factory.js',//ova treba da se smeni lab6
  'app/group/group-service.remote.js', // za lab6

  //student
  'app/student/student.state.js',
  'app/student/student.controller.js',
  'app/student/student-service.remote.js',

  //professor
  'app/professor/professor.state.js',
  'app/professor/professor.controller.js',
  'app/professor/professor-service.remote.js',

  //course
  'app/course/course.state.js',
  'app/course/course.controller.js',
  'app/course/course-service.remote.js',

  //new-grade
  'app/new-grade/new-grade.state.js',
  'app/new-grade/new-grade.controller.js',
  'app/new-grade/new-grade-service.remote.js',

  //student-grades
  'app/student-grades/student-grades.state.js',
  'app/student-grades/student-grades.controller.js',
  'app/student-grades/student-grades-service.remote.js',

  //professor-grades
  'app/professor-grades/professor-grades.state.js',
  'app/professor-grades/professor-grades.controller.js',
  'app/professor-grades/professor-grades-service.remote.js',

  //directives
  'app/directives/showcase-directive/showcase-directive.directive.js',
  'app/directives/wp-combo/wp-combo.directive.js',

  //components
  'app/components/wp-input/wp-input-component.component.js',
  'app/components/group-select/group-select-component.component.js',
  'app/components/professor-select/professor-select-component.component.js',
  'app/components/course-select/course-select-component.component.js',
  'app/components/student-select/student-select-component.component.js'

];

var TEMPLATES_SRC = [
  'app/default-page/**.html',

  //entities views
  'app/group/group.view.html',
  'app/student/student.view.html',
  'app/professor/professor.view.html',
  'app/course/course.view.html',
  'app/new-grade/new-grade.view.html',
  'app/student-grades/student-grades.view.html',
  'app/professor-grades/professor-grades.view.html'

];

var CSS_APP = [
  'css/main.css'
];

var FONTS_LIB = [
  'bower_components/components-font-awesome/fonts/fontawesome-webfont.woff2',
  'bower_components/components-font-awesome/fonts/fontawesome-webfont.woff',
  'bower_components/components-font-awesome/fonts/fontawesome-webfont.ttf'
];

var CSS_LIB = [
  'bower_components/bootstrap/dist/css/bootstrap.css',
  'bower_components/components-font-awesome/css/font-awesome.min.css',
  'bower_components/angular-ui-select/dist/select.css'];


var JS_LIB = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js',
  'bower_components/angular/angular.js',
  'bower_components/momentjs/moment.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js',
  'bower_components/angular-ui-select/dist/select.js',
  'bower_components/angular-smart-table/dist/smart-table.js',
  'bower_components/angular-resource/angular-resource.js',

  'bower_components/d3/d3.min.js',
  'bower_components/c3/c3.min.js',
  'bower_components/c3-angular/c3-angular.min.js'
];


/**
 *   The location of the resources for deploy
 */
var DESTINATION = 'dest/';

var FONTS_DESTINATION = 'fonts/';
/**
 * The single page initial html file. It will be altered
 * by this script.
 */
var INDEX_FILE = 'index.html';
/**
 * The name of the angular module
 */
var MODULE_NAME = 'wp-angular-starter';
/**
 * The URL of the back-end API
 */
// <<<<<<< HEAD
// staro pred lab6
// var API_URL = 'http://localhost:8080/servlet-showcase/api';
// novo za lab6
// =======
// >>>>>>> upstream/master
var API_URL = 'http://localhost:8080/api';
/**
 * Route to which the API calls will be mapped
 */
var API_ROUTE = '/api';

/**
 * Task for concatenation of the js libraries used
 * in this project
 */
gulp.task('concat_js_lib', function () {
  return gulp.src(JS_LIB) // which js files
    .pipe(concat('lib.js')) // concatenate them in lib.js
    .pipe(gulp.dest(DESTINATION)); // save lib.js in the DESTINATION folder
});

/**
 * Task for concatenation of the css libraries used
 * in this project
 */
gulp.task('concat_css_lib', function () {
  return gulp.src(CSS_LIB) // which css files
    .pipe(concat('lib.css')) // concat them in lib.css
    .pipe(gulp.dest(DESTINATION)); // save lib.css in the DESTINATION folder
});

/**
 * Task for concatenation of the js code defined
 * in this project
 */
gulp.task('concat_js_app', function () {
  return gulp.src(JS_APP)
    .pipe(concat('src.js'))
    .pipe(gulp.dest(DESTINATION))
});

/**
 * Task for concatenation of the css code defined
 * in this project
 */
gulp.task('concat_css_app', function () {
  return gulp.src(CSS_APP)
    .pipe(concat('app.css'))
    .pipe(gulp.dest(DESTINATION))
});

/**
 * Task for concatenation of the html templates defined
 * in this project
 */
gulp.task('templates', function () {
  return gulp.src(TEMPLATES_SRC) // which html files
    .pipe(
      templateCache('templates.js', { // compile them as angular templates
        module: MODULE_NAME,        // from module MODULE_NAME
        root: 'app'                 // of the app
      }))
    .pipe(gulp.dest(DESTINATION));
});

/**
 * Task for adding the revision as parameter
 * for cache braking
 */
gulp.task('cache-break', function () {
  return gulp.src(INDEX_FILE) // use the INDEX_FILE as source
    .pipe(rev())            // append the revision to all resources
    .pipe(gulp.dest('.'));  // save the modified file at the same destination
});

gulp.task('fonts', function () {
  return gulp.src(FONTS_LIB)
    .pipe(gulp.dest(FONTS_DESTINATION))
});

var tasks = [
  'concat_js_lib',
  'concat_css_lib',
  'concat_js_app',
  'concat_css_app',
  'fonts',
  'templates'
];

gulp.task('build', tasks, function () {
  gulp.start('cache-break');
});

gulp.task('watch', function () {
  gulp.watch('app/**/**.js', ['concat_js_app', 'cache-break']);
  gulp.watch('app/**/**.html', ['templates', 'cache-break']);
  gulp.watch('css/**/**.css', ['concat_css_app', 'cache-break']);
});

gulp.task('serve', function () {
  connect.server({
    port: 8000,
    livereload: true,
    middleware: function (connect, opt) {
      return [
        (function () {
          var url = require('url');
          var proxy = require('proxy-middleware');
          var options = url.parse(API_URL);
          options.route = API_ROUTE;
          return proxy(options);
        })()
      ];
    }
  });
});

gulp.task('default', ['serve', 'watch']);
