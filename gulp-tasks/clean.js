var del = require('del');

module.exports = function() {
    var gulp = this.gulp;
    var config = this.opts.config;

    return del.sync(config.paths.dist);
};