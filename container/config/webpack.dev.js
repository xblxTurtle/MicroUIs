const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devConfig = {
        mode: 'development',
        devServer: {
            port: 8080,
            historyApiFallback: {
                index: 'index.html'
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
};

module.exports = merge(common, devConfig);