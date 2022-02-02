const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    mode : 'development',
    devtool: 'source-map',

    output : {
        filename :'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist' ),
        assetModuleFilename: './assets/[name].[hash].[ext]'
    },

    plugins: [new HtmlWebpackPlugin( {
        template : './index.html'
    })],

    module : {
        rules : [
            {
                test : /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test : /\.html$/,
                use : ['html-loader']
            },
            {
                test : /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource'
            }
        ]
    }
}