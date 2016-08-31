const gulp = require('gulp');
const config = require('../config');

gulp.task(
	'compile-watch', 
	[], 
	() => {
	  gulp.watch(config.compile.source + '/**/*.pug', ['compile-pug']);
	  gulp.watch(config.compile.source + '/**/*.scss', ['compile-sass']);
	  gulp.watch([
	  	config.compile.source + '/**/*.js',
	  	config.compile.source + '/**/*.jsx',
	  ], ['compile-javascript']);
	  gulp.watch(config.compile.source + '/render-process/assets/**/*.*', ['compile-assets']);
	}
);