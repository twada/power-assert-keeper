module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'expect'],
        files: [
            { pattern: 'node_modules/requirejs/require.js', included: false },
            { pattern: 'test/fixture/amd.html', watched: true, served: true, included: false },
            { pattern: 'build/power-assert.js', watched: true, served: true, included: true },
            { pattern: 'test/tobe_instrumented/assertion.js', watched: true, served: true, included: true },
            { pattern: 'test/tobe_instrumented/assertion.es6.js', watched: true, served: true, included: true },
            { pattern: 'test/tobe_instrumented/customization.js', watched: true, served: true, included: true },
            { pattern: 'test/not_tobe_instrumented/not_instrumented.js', watched: true, served: true, included: true },
            { pattern: 'test/tobe_instrumented/modules.js', watched: true, served: true, included: true }
        ],
        preprocessors: {
            'test/tobe_*/*.js': ['espower']
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
