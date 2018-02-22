let path = require('path');

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
    }
};