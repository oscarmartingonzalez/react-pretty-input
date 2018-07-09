
const Path = require('path');

const PATHS = require('./webpack.config.js').PATHS;

let projectConf = require('./webpack.base.js');
projectConf.devServer = {
    port: 8081,
    contentBase: PATHS.DIST
};

module.exports = projectConf;
