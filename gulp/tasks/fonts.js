let gulp = require('gulp');

gulp.task('fonts', () => {
  return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('public/fonts'));
});
