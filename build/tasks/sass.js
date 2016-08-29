const gulp = require('gulp');
const config = require('../config');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const importFromRoot = require('./import-from-root');
const path = require('path');

gulp.task(
	'compile-sass',
	['compile-empty-dist-directory'],
	() => {
	  return gulp
	    .src(
	    	config.compile.source + '/**/*.scss',
	    	{base: config.compile.source}
	    )
	    .pipe(importFromRoot(config.sassImportFromRoot))
	    .pipe(plumber())
	    .pipe(sass())
	    .pipe(gulp.dest(config.compile.dest))
	}
);