const path = require("path");
const merge = require("webpack-merge");
const HtmlWebPack = require("html-webpack-plugin");
const p = require("../../common/path");
const { IS_DEV } = require("../../common/config");

const optionsBase = {
    template: path.resolve(p.src, "index.html"),
    filename: "index.html",
    minify: { removeScriptTypeAttributes: true }
};
const optionsDev = {};
const optionsProd = {
    cache: true,
    // jsExtension: ".gz",
    minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
    }
};
const optionsMode = IS_DEV ? optionsDev : optionsProd;
const options = merge(optionsBase, optionsMode);

module.exports = new HtmlWebPack(options);
