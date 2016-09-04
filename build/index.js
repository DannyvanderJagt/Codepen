const gulp = require('gulp');
const sequence = require('gulp-sequence');

// Compile tasks.
require('./compile/clean');
require('./compile/pug');
require('./compile/sass');
require('./compile/javascript');
require('./compile/assets');
require('./compile/watch');

// Release tasks.
require('./release');

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

gulp.task('release', sequence(
	'compile',
	'release-windows',
	'release-mac'
));