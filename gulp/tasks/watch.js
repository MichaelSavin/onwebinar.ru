var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('app/css/**/*.*', ['styles']);
    gulp.watch('app/pages/**/*.html', ['html']);
    gulp.watch('app/js/**/*.js', ['javascript']);
    gulp.watch('app/img/**/*.*', ['images']);
    gulp.watch('app/fonts/**/*.*', ['fonts']);
    gulp.watch('app/svg/*.svg', ['svg']);
});
