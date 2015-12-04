var gulp = require('gulp');
var config = require('./package').gulpConfig;
require('gulp-task-loader')({config: config});

gulp.task('build', ['clean', 'server:build', 'client:build']);

gulp.task('test', ['server:test']);

gulp.task('default', ['build', 'test', 'serve', 'watch', 'open']);