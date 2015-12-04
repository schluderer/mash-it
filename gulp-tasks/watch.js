module.exports = function() {
    var gulp = this.gulp;
    var config = this.opts.config;

    gulp.watch(config.paths.serverSrc, ['server:js']);
    gulp.watch(config.paths.clientSrc, ['client:js']);
    gulp.watch(config.paths.html, ['client:html']);
    gulp.watch(config.paths.css, ['client:css']);
};