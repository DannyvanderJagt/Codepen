const gulp = require('gulp');
const config = require('../config');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');

gulp.task(
	'compile-pug', 
	['compile-empty-dist-directory'],
	() => {
		return gulp
			.src(
				config.compile.source + '/**/*.pug',
				{base: config.compile.source}
			)
			.pipe(plumber())
			.pipe(pug())
			.pipe(gulp.dest(config.compile.dest))
	}
);