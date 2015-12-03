var open = require('gulp-open');

module.exports = function() {
    var gulp = this.gulp;
    var config = this.opts.config;

    return gulp
        .src('')
        .pipe(open({ uri: 'http://localhost:3000/'}));
};

module.exports.dependencies = ['serve'];