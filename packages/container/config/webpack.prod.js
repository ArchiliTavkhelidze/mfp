const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN || 'http://localhost:3000';

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`,
                // auth: 'auth@http://localhost:3003/remoteEntry.js',
            },
            shared: packageJson.dependencies,
        })
    ],
}

module.exports = merge(commonConfig, prodConfig);