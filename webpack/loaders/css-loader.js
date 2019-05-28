function cssLoader() {
    return {
        loader: "css-loader",
        options: {
            modules: true,
            localIdentName: "[name]_[local]_[hash:base64:5]"
        }
    };
}

module.exports = cssLoader;
