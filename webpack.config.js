const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
module.exports = () => {
    return {
        entry: ['webpack/hot/poll?100', './dist/main.js'],
        watch: true,
        externals: [
            nodeExternals({
                allowlist: ['webpack/hot/poll?100'],
            }),
        ],
        output: {
            path: path.resolve('dist'),
            filename: 'index.js'
        },
        mode: 'development',
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
            new StartServerPlugin({ name: 'index.js' }),
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ],
        resolve: {
            alias: {
                '@extras': path.resolve(__dirname, './src/app/extras'),
                '@extras/*': path.resolve(__dirname, './src/app/extras/*'),
                '@stores': path.resolve(__dirname, './src/app/stores'),
                '@stores/*': path.resolve(__dirname, './src/app/stores/*'),
                '@environments/*': path.resolve(__dirname, './src/environments/*'),
                '@services': path.resolve(__dirname, './src/app/services'),
                '@modules': path.resolve(__dirname, './src/app/modules'),
                '@view-models': path.resolve(__dirname, './src/app/view-models'),
                '@app/*': path.resolve(__dirname, './src/app/*'),
            },
            extensions: ['.tsx', '.ts', '.js']
        },
    }
}