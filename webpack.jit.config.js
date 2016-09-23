var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    /*
    debug: true,
    devtool: 'source-map',
    */
    devtool: false,
    entry: {
        'polyfills': './app/polyfills',
        'app': './app/main.jit'
    },
    output: {
        path: __dirname + "/dist/jit",
        filename: "[name].js",
        publicPath: "dist/"
    },
    resolve: {
        extensions: ['.ts', '.js', '.jpg', '.jpeg', '.gif', '.png', '.css', '.html']
    },
    module: {
        loaders: [
            { test: /\.(jpg|jpeg|gif|png)$/, loader:'file-loader?name=img/[path][name].[ext]' },
            { test: /\.(eof|woff|woff2|svg)$/, loader:'file-loader?name=img/[path][name].[ext]' },
            { test: /\.css$/, loader:'raw-loader' },
            { test: /\.html$/,  loaders: ['html-loader'] },
            { test: /\.ts$/, loaders: ['angular2-template-loader', 'awesome-typescript-loader'], exclude: /node_modules/}
        ]
    },
    plugins: [
        /*
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),*/
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    node: {
        __filename: true
    },
    devServer: {
        inline:true,
        port: 8080,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
  
};
