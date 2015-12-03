module.exports = function() {
    var gulp = this.gulp;
    var config = this.opts.config;

    return gulp
        .src(config.paths.serverSrc)
        .pipe(gulp.dest(config.paths.dist + config.paths.server));
};

module.exports.dependencies = ['lint-server'];
