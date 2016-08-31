const gulp = require('gulp');
const sequence = require('gulp-sequence');

// Compile tasks.
require('./tasks/clean');
require('./tasks/pug');
require('./tasks/sass');
require('./tasks/javascript');
require('./tasks/assets');
require('./tasks/watch');

// Main tasks.
gulp.task('default', ['compile']);
gulp.task('compile', sequence(
	'compile-clean',
	[
		'compile-pug',
		'compile-sass',
		'compile-javascript',
		'compile-assets',
		'compile-watch',
	]
	)
);