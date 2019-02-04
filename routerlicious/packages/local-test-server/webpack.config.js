// This config exists in order to test local-test-server in a browser context, vs Node.js.

const path = require('path');

module.exports = {
    entry: {
        main: './src/index.ts'
    },
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: "[name]",
        libraryTarget: "umd"
    },
    devServer: {
        publicPath: '/dist'
    },
};
