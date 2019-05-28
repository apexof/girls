const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
    loader: "postcss-loader",
    options: {
        ident: "postcss",
        plugins: [autoprefixer, cssnano]
    }
};
