module.exports = function() {
    var gulp = this.gulp;
    var config = this.opts.config;

    return gulp
        .src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist + config.paths.public));
};