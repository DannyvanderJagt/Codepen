const gulp = require('gulp');
const config = require('../config');
const plumber = require('gulp-plumber');


gulp.task(
	'compile-copy-package-file', 
	['compile-empty-dist-directory'],
	() => {
		return gulp
			.src(config.compile.source + '/package.json')
			.pipe(plumber())
			.pipe(gulp.dest(config.compile.dest))
	}
);