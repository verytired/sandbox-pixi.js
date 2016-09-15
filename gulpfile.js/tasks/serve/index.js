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

gulp.task('nodemon', function(cb) {
    var called = false;
    return $.nodemon({
        script: './src/server.js',
        ext: 'js html css', // 監視するファイルの拡張子
        ignore: ['./build', 'node_modules']
    })
    .on('start', function() {
        // サーバー起動時
        if (!called) {
            called = true;
            cb();
        }
    })
    .on('restart', function() {
        // サーバー再起動時
        setTimeout(function() {
            browserSync.reload();
        }, 500);
    });
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy : 'http://localhost:8080',
        port  : 5000
    });
});

gulp.task('browserify', function() {
  browserify({
    entries : ['./src/js/index.js'],
    debug   : true
  })
    .transform('babelify')
    .bundle()
    .on("error", function(err) {
      console.log("browserify Error : " + err.message);
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['browserify']);
  gulp.watch('./public/*', ['bs-reload']);
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('serve', ['browser-sync', 'browserify', 'watch']);
