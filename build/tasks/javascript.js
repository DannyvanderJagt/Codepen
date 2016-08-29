const gulp = require('gulp');
const path = require('path');
const config = require('../config');
const plumber = require('gulp-plumber');
const importFromRoot = require('./import-from-root');
const babel = require('gulp-babel');

gulp.task(
  'compile-javascript', 
  ['compile-empty-dist-directory'],
  () => {
    return gulp
      .src([config.compile.source + '/**/*.js'])
      .pipe(plumber())
      .pipe(importFromRoot(config.jsImportFromRoot))
      .pipe(babel({
        presets: ['es2015', 'react']
      }))
      .pipe(gulp.dest(config.compile.dest))
  }
);