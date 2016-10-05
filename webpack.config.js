const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        index: ['./lib/index']
    },
    output: {
        path: path.resolve('./'),
        filename: '[name].js'
    },
    eslint: {
        configFile: './.eslintrc'
    },
    module: {
        // Validate by ESLint before loading
        preLoaders: [
            {
                test: /\.js|\.spec.js$/,
                loaders: ['eslint'],
                exclude: /node_modules/
            }
        ],
        loaders: [
            //Compile ES6/7 to ES5 via babel
            {
                test: /\.(js)$/,
                loader: ['babel-loader'],
                exclude: /node_modules/,
                query: {}
            },
            // LESS
            {
                test: /\.(less|css)$/,
                // loader: ExtractTextPlugin.extract(
                //     'style',
                //     'css?modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]',
                //     'autoprefixer',
                //     'less')
                loader: "style!css!less"
            },
            //webfonts
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],

    node: {
        fs: "empty"
    },

    // Pretty terminal output
    stats: {colors: true},

    // Generate external sourcemaps for the JS & CSS bundles
    devtool: 'source-map',

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            debug: true,
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        })
    )
}

module.exports = config;
