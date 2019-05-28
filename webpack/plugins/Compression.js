const Compression = require("compression-webpack-plugin");

module.exports = new Compression({
    cache: true,
    deleteOriginalAssets: true,
    test: /\.js(\?.*)?$/i
});
