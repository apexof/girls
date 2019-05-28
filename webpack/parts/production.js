const { UglifyJs, HashedModuleIds } = require("../plugins");
const p = require("../../common/path");

module.exports = {
    entry: {
        polyfills: "./polyfills.legacy.js",
        main: p.src
    },
    mode: "production",
    watch: false,
    devtool: false,
    optimization: {
        runtimeChunk: true,
        minimizer: [UglifyJs]
    },
    plugins: [
        HashedModuleIds
    ]
};
