const common = require('./webpack.common.js');
const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const devConfig = {
        mode: 'development',
        devServer: {
            port: 8081,
            historyApiFallback: {
                index: 'index.html'
            }
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'marketing',
                filename: 'remoteEntry.js',
                exposes: {
                    './MarketingRoot': './src/bootstrap.js'
                },
                shared: ['react','react-dom']
            })
        ]
};

module.exports = merge(common, devConfig);