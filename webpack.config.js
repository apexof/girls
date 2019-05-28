const merge = require("webpack-merge");
const { IS_DEV } = require("./common/config");
const { base, dev, prod } = require("./webpack/parts");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

const modeCfg = IS_DEV ? dev : prod;
const config = merge(base, modeCfg);
const smpConfig = smp.wrap(config);

module.exports = smpConfig;
