const { miniCss, styleLoader } = require("../loaders");
const { IS_DEV } = require("../../common/config");

module.exports = {
    test: /\.css$/,
    use: [
        IS_DEV ? styleLoader : miniCss,
        "css-loader"
    ]
};
