const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');
//import html = from ''


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
                {loader: MinCssExtractPlugin.loader},
                
                {loader: "css-loader"},
                {
                    loader: "postcss-loader",
                    options:{
                        plugins: function(){
                            return[
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                },
                {loader: "sass-loader"}
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/public/img/',
                            useRelativePath: true
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {loader: "url-loader?limit=10000&mimetype=application/font-woff"}]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{loader: "file-loader"}]
            },
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
                    gifsicle: {
                      interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                      quality: 75
                    }
                  }
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
            //template: path.resolve(__dirname,'../src/index.hbs'),
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