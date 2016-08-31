const gulp = require('gulp');
const path = require('path');
const config = require('../config');
const plumber = require('gulp-plumber');
const importFromRoot = require('./import-from-root');
const babel = require('gulp-babel');

gulp.task(
  'compile-javascript', 
  [],
  () => {
    return gulp
      .src(
        [
          config.compile.source + '/**/*.js',
          config.compile.source + '/**/*.jsx',
          `!${config.compile.source}/node_modules`,
          `!${config.compile.source}/node_modules/**`,
        ],
        {base: config.compile.source}
      )
      .pipe(plumber())
      .pipe(importFromRoot(config.jsImportFromRoot))
      .pipe(babel({
        presets: ['es2015', 'react']
      }))
      .pipe(gulp.dest(config.compile.dest))
  }
);