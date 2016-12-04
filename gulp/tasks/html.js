var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');

gulp.task('html', function() {
  gulp.src('app/pages/**/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({stream: true}));
});
