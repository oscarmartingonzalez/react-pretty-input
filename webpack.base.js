
const Path = require('path');

const PATHS = require('./webpack.config.js').PATHS;

module.exports = {
    entry: {
        index: Path.resolve(PATHS.SRC, 'index.js'),
        demo: Path.resolve(PATHS.SRC, 'demo.jsx')
    },
    output: {
        path: PATHS.DIST,
        filename: '[name].js',
        library: 'ReactPrettyInput',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
                            localIdentName: '[local]'
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
};
