const path = require("path");
const p = require("../../common/path");

module.exports = {
    // devtool: "source-map",
    entry: { main: p.src },
    output: { publicPath: "/" },
    mode: "development",
    watch: true,
    watchOptions: { ignored: /node_modules/ },
    devServer: {
        port: 8080,
        hot: true,
        inline: true,
        // https: true,
        // writeToDisk: true,
        contentBase: p.dist,
        proxy: { "/api": "http://localhost:3000" }
    }
};
