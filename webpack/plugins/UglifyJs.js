const UglifyJs = require("terser-webpack-plugin");

module.exports = new UglifyJs({
    cache: true,
    parallel: true
});
