const gulp = require('gulp');
const config = require('../config');

gulp.task(
	'compile-watch', 
	[], 
	() => {
	  gulp.watch(config.compile.source + '/**/*.pug', ['compile-pug']);
	  gulp.watch(config.compile.source + '/**/*.scss', ['compile-sass']);
	  gulp.watch(config.compile.source + '/**/*.js', ['compile-js']);
	  gulp.watch([
		  	config.compile.source + '/**/*.svg',
		  	config.compile.source + '/**/*.jpg',
		  	config.compile.source + '/**/*.png',
	  	], 
	  	['compile-assets']
	  );
	}
);