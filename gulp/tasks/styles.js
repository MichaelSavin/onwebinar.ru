let gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  postcss = require('gulp-postcss'),
  lost = require('lost'),
  rucksack = require('rucksack-css'),
  autoprefixer = require('autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber'),
  gulpif = require('gulp-if'),
  browserSync = require('browser-sync'),
  cleanCSS = require('gulp-clean-css');

let isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('styles', () => {
  let processors = [lost, rucksack, autoprefixer({
      browsers: ['> 1%', 'last 4 Safari versions'] })];
  gulp.src('app/css/**/*.*')
        .pipe(plumber())
        .pipe(gulpif(isDevelopment, sourcemaps.init()))
        .pipe(stylus({ linenos: true, compress: true }))
        .pipe(postcss(processors))
        .pipe(cleanCSS())
        .pipe(gulpif(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('public/css/'))
        .pipe(browserSync.reload({
          stream: true,
        }));
});
