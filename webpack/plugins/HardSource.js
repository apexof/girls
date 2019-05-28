const HardSource = require("hard-source-webpack-plugin");
const nodeObjectHash = require("node-object-hash");

module.exports = new HardSource({
    configHash(webpackConfig) {
        return nodeObjectHash({ sort: false }).hash(webpackConfig);
    }
});
