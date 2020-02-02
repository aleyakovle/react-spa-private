// shared config (dev and prod)
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html.ejs' }),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    performance: {
        hints: false,
    },
};
