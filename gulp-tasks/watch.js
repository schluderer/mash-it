module.exports = function() {
    var gulp = this.gulp;
    var config = this.opts.config;

    gulp.watch(config.paths.serverSrc, ['server:js', 'server:test']);
    gulp.watch(config.paths.serverTests, ['server:test']);

    gulp.watch(config.paths.clientSrc, ['client:js']);
    gulp.watch(config.paths.html, ['client:html']);
    gulp.watch(config.paths.css, ['client:css']);
};