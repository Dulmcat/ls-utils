const webpack = require('webpack');
const path = require('path');

const pkg = require('../package.json');

const rootpath = path.resolve(__dirname, '../');

const config = {
    entry: path.resolve(rootpath, 'src', 'index.js'),
    output: {
        filename: `${pkg.name}.min.js`,
        path: path.resolve(rootpath, 'min'),
        library: `${pkg.name}`,
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "bable-loader"
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}

moudle.exports = config;