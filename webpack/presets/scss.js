const { cssLoader, sassLoader, miniCss, postcss, styleLoader } = require("../loaders");
const { IS_DEV } = require("../../common/config");

const scssPreset = {
    test: /\.s(a|c)ss$/,
    use: [
        IS_DEV ? styleLoader : miniCss,
        cssLoader
    ]
};

if (IS_DEV) {
    scssPreset.use.push(sassLoader);
} else {
    scssPreset.use.push(postcss, sassLoader);
}
module.exports = scssPreset;
