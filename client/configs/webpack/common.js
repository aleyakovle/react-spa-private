// shared config (dev and prod)
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [resolve(__dirname, '../../src'), 'node_modules'],
    },
    context: resolve(__dirname, '../../src'),
    output: {
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'source-map-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
                ],
            },
            {
                test: /\.ico$/,
                loader: 'file-loader'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html.ejs', favicon: resolve(__dirname, '../../src/assets/images/favicon.ico/favicon.ico') }),
        new CopyPlugin([
            { from: resolve(__dirname, '../../manifest.json'), to: resolve(__dirname, '../../dist/manifest.json') },
            { from: resolve(__dirname, '../../src/assets/images/Icon-192.png'), to: resolve(__dirname, '../../dist/img/Icon-192.png') },
            { from: resolve(__dirname, '../../src/assets/images/react_logo_512.png'), to: resolve(__dirname, '../../dist/img/react_logo_512.png') },
        ]),
    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    performance: {
        hints: false,
    },
};
