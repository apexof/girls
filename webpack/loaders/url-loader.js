module.exports = {
    loader: "url-loader",
    options: {
        limit: 8000,
        name: "[name].[ext]",
        outputPath: "img"
    }
};
