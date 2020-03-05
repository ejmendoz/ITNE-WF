const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/app.js'
    },

    devServer:{
        port: 3000
    },

    module: {
        rules: [
            {
                test:/\.(sa|sc|c)ss$/,
                use:[ 
                MinCssExtractPlugin.loader,
                'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'public/img/',
                            useRelativePath: true
                        }
                    }
                ]
            },
            

            {
                test: /\.hbs/,
                loader: 'handlebars-loader',
                options: {
                    rootRelative: path.join(__dirname,'../src/views/')    
                }
            }
        ]    
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/views/layouts/index.hbs'),
            minify: 
            {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }

        }),
        new MinCssExtractPlugin({
            filename: 'css/[name].css'
        })

    ]
}