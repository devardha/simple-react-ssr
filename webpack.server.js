const path = require('path');
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './server.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    externals: [webpackNodeExternals()]
}