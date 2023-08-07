const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const packageJson = require('../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const prodConfig = {
    mode:'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingRoot': './src/bootstrap.js'
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(common, prodConfig);