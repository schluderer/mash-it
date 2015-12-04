var config = require('../package').gulpConfig;
var gls = require('gulp-live-server');
var server = gls.new(config.paths.dist + config.paths.server + '/index.js');
var restartServer = function() {
    server.start.bind(server)();
};
var notifyBrowser = server.notify.bind(server);

module.exports = function() {
    var gulp = this.gulp;
    var config = this.opts.config;

    server.start();
    gulp.watch(config.paths.dist + config.paths.server + '/**/*', restartServer);
    gulp.watch(config.paths.dist + config.paths.public + '/**/*', notifyBrowser);
};
module.exports.dependencies = ['server:js'];
