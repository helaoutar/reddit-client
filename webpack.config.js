let path = require('path');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public');

module.exports = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'dist.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    {
                     loader: "style-loader"
                    }, 
                    {
                     loader: "css-loader"
                    }, 
                    {
                     loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/, 
                use: [
                    'file-loader',
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        bypassOnDebug: true,
                      },
                    },
                ]
            },
            {
              test: /\.json$/,
              loader: 'json-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    plugins: [new BundleAnalyzerPlugin()]
};