const path = require("path");

const root = process.cwd();

const p = {
    dist: path.resolve(root, "dist"),
    src: path.resolve(root, "src"),
    static: path.resolve(root, "static")
};

p.distStatic = path.join(p.dist, "static");
module.exports = p;
