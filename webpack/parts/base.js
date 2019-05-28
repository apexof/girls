const p = require("../../common/path");
const { js, img, css, scss, imgPreview } = require("../presets");
const { CleanWebpack, CopyWebpack, MiniCssExtract, HtmlWebPack, Provide, HardSource, ImageMin } = require("../plugins");

module.exports = {
    // context: p.src,
    // entry: { main: p.src },
    output: {
        path: p.dist,
        filename: "[name].[hash].js",
        publicPath: "./"
    },
    plugins: [
        CleanWebpack,
        CopyWebpack,
        HtmlWebPack,
        ImageMin,
        MiniCssExtract,
        Provide
        // Manifest
        // HardSource
    ],
    stats: "errors-warnings",
    module: { rules: [js, img, imgPreview, css, scss] },
    performance: {
        maxEntrypointSize: 400000,
        hints: false // TODO
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 1
            // minChunks: 2
        }
    },
    resolve: { extensions: [".js", ".json", ".jsx"] }
};
