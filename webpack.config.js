const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.tsx",
        // a: "./src/index.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.es6', '.jsx', '.tsx'],
        alias: {
            "@src": path.resolve(__dirname, "./src"),
            "src": path.resolve(__dirname, "./src")
        }
    },
    devServer: {
        contentBase: "./dist",
        // publicPath: '/dist/',
        filename: 'bundle.js',
        open: true,
        hot: true
    },
    devtool: "eval-cheap-module-source-map",
    externals: ["lodash"],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        // publicPath: "ws15123.com"，
        library: "wang",
        libraryTarget: "umd"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
    ],
    // optimization: { // 开发环境
    //     usedExports: true // 只打包使用的export 要在package.json 添加 "sideEffects": [],处理不需要处理的文件
    // },

    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|scss|sass|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(svg|woff|eot|ttf)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: "[name]_[hash].[ext]",
                            outputPath: "images/",
                            limit: 8192,
                        },
                    },
                ],
            }
        ]
    }
}