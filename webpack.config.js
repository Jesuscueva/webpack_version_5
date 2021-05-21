const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve:{
        extensions : ['.js']
    },
    module:{
        rules:[
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "html-loader",
                        options:{
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                ]
            },
                {
                    test: /\.css$/i,
                    // use: [
                    //     MiniCssExtractPlugin.loader,
                    //     "css-loader"
                    // ]
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: "./"
                            }
                        },
                        "css-loader"
                    ]
                },
            {
                test: /\.(jpe?g|png|gif|svg|webp|ico)$/,
                use: ["file-loader?name=assets/[name].[ext]", "image-webpack-loader"]
            },
            {
                test: /\.(woff)$/,
                use: ["file-loader?name=assets/[name].[ext]"]
            },
            // {
            //     test: /\.html$/i,
            //     use: ["html-loader"]
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin()
    ]
}