var jasmine = require('gulp-jasmine');

module.exports = function() {
    var gulp = this.gulp;
    var config = this.opts.config;

    return gulp
        .src(config.paths.clientTests)
        .pipe(jasmine({
            includeStackTrace: true
        }));
};
