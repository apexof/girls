const CopyPlugin = require("copy-webpack-plugin");
const p = require("../../common/path");


module.exports = new CopyPlugin(
    [{
        from: p.static,
        to: p.distStatic
    }],
    { cache: true }
);
