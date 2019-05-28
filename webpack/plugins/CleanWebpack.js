const CleanWebpack = require("clean-webpack-plugin");

const options = {
    cleanOnceBeforeBuildPatterns:
        ["*.*", "!index.html"]
};

module.exports = new CleanWebpack(options);
