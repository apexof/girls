const p = require("../../common/path");

module.exports = {
    test: /\.jsx?$/,
    include: p.src,
    use: "babel-loader"
};
