const common = require('./webpack.common.js');
const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const domain = process.env.PRODUCTION_DOMAIN;
const packageJson = require('../package.json');

const prodConfig = {
    mode:'production',
    output: {
        filename: "[name].[contenthash].js",
        publicPath: "container/latest/"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                'marketing': `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(common, prodConfig);