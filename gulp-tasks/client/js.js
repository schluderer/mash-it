var browserify = require('browserify');
var source = require('vinyl-source-stream');

module.exports = function() {
    var gulp = this.gulp;
    var config = this.opts.config;

    browserify({
        entries: config.paths.clientEntry,
        debug: true
    })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(config.paths.dist + config.paths.public + '/js'));
};

module.exports.dependencies = ['client:lint'];