require('es6-promise').polyfill(); //we need this for autoprefixer
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

module.exports = function() {
    var gulp = this.gulp;
    var config = this.opts.config;

    gulp
        .src(config.paths.fonts)
        .pipe(gulp.dest(config.paths.dist + config.paths.public + '/fonts'));

    return gulp
        .src(config.paths.css)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(autoprefixer({ browsers: '> 1% in DE' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.dist + config.paths.public + '/css'));
};