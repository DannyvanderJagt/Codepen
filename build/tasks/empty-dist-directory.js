const gulp = require('gulp');
const ds = require('fs-extra');
const config = require('../config');

gulp.task(
	'compile-empty-dist-directory',
	[],
	() => {
		return ds.emptyDirSync(config.compile.dest);
	}
)