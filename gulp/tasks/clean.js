let gulp = require('gulp'),
  del = require('del');

gulp.task('clean', () => {
  return del(['public/img']);
});
