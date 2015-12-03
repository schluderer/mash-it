var gulp = require('gulp');
var config = require('./package').gulpConfig;
require('gulp-task-loader')({config: config});

gulp.task('build', ['clean', 'server-js', 'html', 'css', 'client-js']);

gulp.task('default', ['build', 'serve', 'watch', 'open']);