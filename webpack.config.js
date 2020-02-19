const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    // output: {
    //     path: __dirname + '/dist', 
    //     filename: 'main.js' 
    // },

    devServer: {
        contentBase:'./dist'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'ru'],
        })
    ]
}