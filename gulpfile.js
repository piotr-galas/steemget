'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sequence = require('run-sequence');
const webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('sass', function () {
  return gulp.src('./dev/stylesheets/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./dev/stylesheets/**/*.scss', ['sass']);
});

gulp.task('dev', () => {
  sequence(
    'sass',
    'sass:watch',
    'webserver'
  )
});