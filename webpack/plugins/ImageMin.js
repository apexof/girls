const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");

module.exports = new ImageminPlugin({
    test: /\.(jpe?g)$/i,
    plugins: [
        imageminMozjpeg({
            quality: 70,
            progressive: true
        })
    ]
});
