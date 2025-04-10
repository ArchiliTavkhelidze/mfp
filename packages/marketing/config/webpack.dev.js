const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3001,
        open: true,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        })
    ],
};

module.exports = merge(commonConfig, devConfig);