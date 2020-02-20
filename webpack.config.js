const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

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
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
                },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                'file-loader',
                // {
                //     loader: 'url-loader',
                //     options: {
                //       limit: false,
                //     },
                // },
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                          },
                          // optipng.enabled: false will disable optipng
                          optipng: {
                            enabled: true,
                          },
                          pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                          },
                    }    
                },
                ],
                },
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

// mozjpeg — Compress JPEG images
// optipng — Compress PNG images
// pngquant — Compress PNG images
// svgo — Compress SVG images
// gifsicle — Compress GIF images