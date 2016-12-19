var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nib = require('nib');

module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'index.jsx'),
    output: {
        path: path.join(__dirname, '../docs'),
        filename: 'bundle.js?[hash]'
    },
    module: {
        preLoaders: [
            // http://survivejs.com/webpack_react/linting_in_webpack/
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                loader: 'stylint'
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.styl$/,
                loaders: [
                    'style',
                    'css?-autoprefixer&camelCase&modules&importLoaders=1&localIdentName=[hash:base64:5]',
                    'stylus'
                ]
            },
            {
                test: /\.css$/,
                loader: 'style!css?-autoprefixer'
            }
        ]
    },
    stylus: {
        // nib - CSS3 extensions for Stylus
        use: [nib()],
        // no need to have a '@import "nib"' in the stylesheet
        import: ['~nib/lib/nib/index.styl']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../docs/index.html',
            template: 'index.html'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // https://webpack.github.io/docs/webpack-dev-server.html#additional-configuration-options
    devServer: {
        noInfo: false,
        quite: false,
        lazy: false,
        // https://webpack.github.io/docs/node.js-api.html#compiler
        watchOptions: {
            poll: true // use polling instead of native watchers
        }
    }
};
