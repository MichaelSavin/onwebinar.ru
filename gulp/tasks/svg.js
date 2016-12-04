var gulp = require('gulp'),
		svgSprite = require('gulp-svg-sprite'),
		browserSync = require('browser-sync'),
		plumber = require('gulp-plumber');

gulp.task('svg', function() {
		// More complex configuration example
	var config = {
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
