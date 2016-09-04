const gulp = require('gulp');
const del = require('del');
const config = require('../config');

gulp.task(
	'compile-clean',
	[],
	() => {
		return del([
			`${config.compile.dest}/*`,
			`!${config.compile.dest}/package.json`,
			`!${config.compile.dest}/node_modules`,
		])
	}
)