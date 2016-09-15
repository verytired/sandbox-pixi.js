'use strict';

var gulp = require('gulp');
// var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

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
            reload();
        }, 500);
    });
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy : 'http://localhost:8080',
        port  : 5000
    });
});

// npmで入れたフロントエンドライブラリのconcat処理
gulp.task('vendor', () => {
  return gulp.src([
      'node_modules/pixi.js/bin/pixi.min.js'
    ])
    .pipe($.plumber({
      errorHandler : (error) => {
        notify('vendor', error);
      }
    }))
    .pipe($.concat('vendor.js'))
    .pipe($.plumber.stop())
    .pipe(gulp.dest('./build/dist'));
});

gulp.task('browserify', function() {
  browserify({
    entries : ['./src/js/index.js'],
    debug   : true
  })
    .transform('babelify')
    .bundle()
    .on("error", function(err) {
      console.log("Error : " + err.message);
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

gulp.task('serve', ['browser-sync', 'vendor', 'browserify', 'watch']);
