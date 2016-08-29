const gulp = require('gulp');

// Compile tasks.
require('./tasks/empty-dist-directory');
require('./tasks/pug');
require('./tasks/sass');
require('./tasks/javascript');
require('./tasks/assets');
require('./tasks/watch');
require('./tasks/copy-package-file');

// Main tasks.
gulp.task('default', ['compile']);
gulp.task('compile', [
	'compile-empty-dist-directory',
	'compile-pug',
	'compile-sass',
	'compile-javascript',
	'compile-assets',
	'compile-copy-package-file',
	'compile-watch',
]);