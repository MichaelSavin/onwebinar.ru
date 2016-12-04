const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');

gulp.task('svg', () => {
// More complex configuration example
  const config = {
    shape: {
      dimension: { // Set maximum dimensions
        maxWidth: 100,
        maxHeight: 100,
      },
      spacing: { // Add padding
        padding: 0,
      },
      dest: 'out/intermediatesvg', // Keep the intermediate files
    },
    mode: {
      view: { // Activate the «view» mode
        bust: false,
        render: {
          css: true, // Activate css output (with default options)
        },
      },
      symbol: true, // Activate the «symbol» mode
    },
  };

  gulp.src('app/svg/*.svg')
.pipe(plumber())
.pipe(svgSprite(config))
.pipe(gulp.dest('public/svg/'))
.pipe(browserSync.reload({
  stream: true,
}));
});
