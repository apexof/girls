const { urlLoader, sqipLoader } = require("../loaders");
const path = require("path");
// const { IS_DEV } = require("../../common/config");

const preset = {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
        // "cache-loader",
        sqipLoader,
        urlLoader
    ],
    exclude: (file) => {
        const filename = path.basename(file);
        return filename.startsWith("_");
    }
};

module.exports = preset;
