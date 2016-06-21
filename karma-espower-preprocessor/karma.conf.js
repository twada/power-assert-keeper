module.exports = function (config) {
    config.set({
        basePath: '',
        client: {
            useIframe: false
        },
        frameworks: ['mocha', 'expect'],
        files: [
            { pattern: 'node_modules/requirejs/require.js', included: false },
            { pattern: 'build/power-assert.js', watched: true, served: true, included: true },
            { pattern: '../test/**/*.js', watched: true, served: true, included: true }
        ],
        preprocessors: {
            '../test/tobe_*/*.js': ['espower']
        },
        espowerPreprocessor: {
            options: {
                emitActualCode: false
            }
        },
        reporters: ['dots'],
        port: 9876,
        colors: true,
        browsers: ['Chrome', 'Firefox'],
        singleRun: true
    });
};
