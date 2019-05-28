const webpack = require("webpack");

module.exports = new webpack.HashedModuleIdsPlugin({
    hashFunction: "md4",
    hashDigest: "base64",
    hashDigestLength: 8
});
