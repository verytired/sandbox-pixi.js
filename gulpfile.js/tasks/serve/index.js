'use strict';

var gulp = require('gulp');
// var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');

//load all module
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'browserify**'],
  replaceString: /\bgulp[\-.]/
});

// npmで入れたフロントエンドライブラリのconcat処理
gulp.task('vendor', () => {
  return gulp.src([
      'node_modules/pixi.js/bin/pixi.min.js'
    ])
    .pipe($.plumber({
      errorHandler: (error) => {
        notify('vendor', error);
      }
    }))
    .pipe($.concat('vendor.js'))
    .pipe($.plumber.stop())
    .pipe(gulp.dest('./build/dist'));
});

gulp.task('browserify', function () {
  browserify({
    entries: ['./src/js/index.js'],
    debug: true
  })
    .transform('babelify')
    .bundle()
    .on("error", function (err) {
      console.log("Error : " + err.message);
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'))
});

gulp.task('watch', function () {
  gulp.watch('./src/js/*.js', ['browserify']);
  gulp.watch('./app/js/*.js', ['bs-reload']);
});

gulp.task('serve', function () {
  // todo : nodeサーバを直接起動リロードさせたい
  // browserSync({
  //   notify: false,
  //   server: {baseDir: 'app/'}
  // })
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', ['vendor', 'browserify', 'watch', 'serve']);
