
const Path = require('path');

const PATHS = require('./webpack.config.js').PATHS;

module.exports = {
    entry: {
        index: Path.resolve(PATHS.SRC, 'index.js'),
        demo: Path.resolve(PATHS.SRC, 'demo.js')
    },
    output: {
        path: PATHS.DIST,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [ PATHS.SRC ],
                exclude: [ Path.resolve(__dirname, 'node_modules'), PATHS.DIST ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]'
                        }
                    }
                ]
            }
        ]
    }
};
