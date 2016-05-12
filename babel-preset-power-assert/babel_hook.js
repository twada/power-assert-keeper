require("babel-register")({
    only: /test\/tobe_instrumented/,
    presets: ['es2015', 'babel-preset-power-assert'],
    extensions: ['.es6', '.js']
});
