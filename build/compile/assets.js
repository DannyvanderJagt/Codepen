const gulp = require('gulp');
const config = require('../config');

gulp.task(
	'compile-assets', 
	[], 
	() => {
	  return gulp
	    .src(
	    	config.compile.source + '/render-process/assets/**/*.*', 
	    	{base: config.compile.source}
	    )
	    .pipe(gulp.dest(config.compile.dest))
	}
);