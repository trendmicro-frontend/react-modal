const path = require('path');
const stylusLoader = require('stylus-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nib = require('nib');
const webpack = require('webpack');
const pkg = require('./package.json');

const webpackConfig = {
    mode: 'production',
    devtool: 'source-map',
    devServer: {
        disableHostCheck: true,
        contentBase: path.resolve(__dirname, 'docs'),
    },
    entry: path.resolve(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]---[hash:base64:5]',
                            camelCase: true,
                            importLoaders: 1
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff'
                }
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new stylusLoader.OptionsPlugin({
            default: {
                // nib - CSS3 extensions for Stylus
                use: [nib()],
                // no need to have a '@import "nib"' in the stylesheet
                import: ['~nib/lib/nib/index.styl']
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    }
};

module.exports = {
    title: `React Modal v${pkg.version}`,
    sections: [
        {
            name: 'Getting Started',
            content: path.resolve(__dirname, 'styleguide/examples/GettingStarted.md'),
        },
        {
            name: 'Context API',
            content: path.resolve(__dirname, 'styleguide/examples/ContextAPI.md'),
        },
        {
            name: 'Hook API',
            content: path.resolve(__dirname, 'styleguide/examples/HookAPI.md'),
        },
        {
            name: 'Components',
            components: [
                'Modal',
                'ModalHeader',
                'ModalTitle',
                'ModalBody',
                'ModalFooter',
                'ModalContext',
                'ModalRoot',
                'ModalOverlay',
            ].map(c => path.resolve(__dirname, `src/${c}.jsx`)),
        },
    ],
    require: [
        '@babel/polyfill',
        path.resolve(__dirname, 'styleguide/setup.js'),
        path.resolve(__dirname, 'styleguide/styles.css'),
    ],
    ribbon: {
        url: pkg.homepage,
        text: 'Fork me on GitHub',
    },
    serverPort: 8080,
    exampleMode: 'expand',
    usageMode: 'expand',
    showSidebar: true,
    styleguideDir: 'docs/',
    template: {
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
                }
            ]
        }
    },
    webpackConfig: webpackConfig,
};
