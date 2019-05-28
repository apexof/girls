const webpack = require("webpack");
const { IS_DEV } = require("../../common/config");

const options = { React: "react", ReactDOM: "react-dom" };
if (IS_DEV) options.PropTypes = "prop-types"; // На проде babel вырежет prop-types

module.exports = new webpack.ProvidePlugin(options);
