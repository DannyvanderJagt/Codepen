const builder = require("electron-builder")
const Platform = builder.Platform
const gulp = require('gulp');
const config = require('../config');

gulp.task('release-windows', () => {
  return builder.build({
      targets: Platform.WINDOWS.createTarget(),
      devMetadata: config.release,
    })
});

gulp.task('release-mac', () => {
  return builder.build({
      targets: Platform.MAC.createTarget(),
      devMetadata: config.release,
    })
});