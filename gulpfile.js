var $, browserSync, gulp, gutil, parentDir, reload, runSequence;

gulp = require('gulp');

gutil = require('gulp-util');

parentDir = "app/";

$ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

browserSync = require('browser-sync');

reload = browserSync.reload;

runSequence = require('run-sequence');

gulp.task('default', function () {
  return console.log('gulp!');
});

gulp.task('typescript', function () {
  return gulp.src(['src/typescript/*.ts', 'src/*/*.ts']).pipe($.plumber()).pipe($.typescript({
    module: "amd",
    target: 'ES5',
    removeComments: true,
    sortOutput: false,
    sourcemap: false,
    out: 'app.js'
  })).pipe(gulp.dest(parentDir + 'js'));
});

gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss').pipe($.sass()).pipe(gulp.dest(parentDir + 'css'));
});

gulp.task('compass', function () {
  return gulp.src('src/sass/*.scss').pipe($.compass({
    config_file: 'config.rb',
    comments: false,
    css: parentDir + 'css',
    sass: 'src/sass/'
  }));
});

gulp.task('serve', ['default'], function () {
  browserSync({
    notify: false,
    server: {
      baseDir: [parentDir]
    }
  });
  gulp.watch(['src/typescript/*.ts'], ['script_type']);
  gulp.watch(['src/sass/*.scss'], ['script_sass']);
  return gulp.watch([parentDir + '*.html'], reload);
});

gulp.task('script', function () {
  return runSequence('coffee', reload);
});

gulp.task('script_type', function () {
  return runSequence('typescript', reload);
});

gulp.task('script_sass', function () {
  return runSequence('compass', reload);
});

