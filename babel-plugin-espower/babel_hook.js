require("babel-register")({
    only: /test\/tobe_instrumented/,
    presets: ['es2015'],
    plugins: ['babel-plugin-espower'],
    extensions: ['.es6', '.js']
});
