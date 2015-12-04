var eslint = require('gulp-eslint');

module.exports = function() {
    var gulp = this.gulp;
    var config = this.opts.config;

    return gulp.src(config.paths.clientSrc)
        .pipe(eslint({
            extends: 'eslint:recommended',
            rules: {
                'no-console': 1,
                'strict': [2, 'global']
            },
            envs: [
                'browser',
                'commonjs'
            ]
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
};