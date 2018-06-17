var semver = require('semver');
var babelOptions = {
    babelrc: false,
    cache: false,
    presets: [
        ['env', {
            targets: {
                node: "current",
                browsers: [
                    ">0.25%",
                    "not ie 11",
                    "not op_mini all"
                ]
            }
        }],
        'power-assert'
    ],
    only: /test\/tobe_instrumented/,
};

if (semver.lt(process.version, '8.0.0')) {
    babelOptions.plugins = [
        'babel-plugin-transform-object-rest-spread'
    ].concat(babelOptions.plugins);
} else {
    babelOptions.parserOpts = {
        plugins: ['objectRestSpread']
    };
}

require('babel-register')(babelOptions);
