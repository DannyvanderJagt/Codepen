const gulp = require('gulp');
const config = require('../config');

gulp.task(
	'compile-assets', 
	['compile-empty-dist-directory'], 
	() => {
	  return gulp
	    .src([
	    	config.compile.source + '/**/*.svg', 
	    	config.compile.source + '/**/*.png', 
	    	config.compile.source + '/**/*.jpg',
	    ])
	    .pipe(gulp.dest(config.compile.dest))
	}
);