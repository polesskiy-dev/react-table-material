const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: ['./lib/index']
    },
    output: {
        path: path.resolve('./dist'),
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
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]',
                    'autoprefixer',
                    'less')
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('dist/css/bundle.css'),
        //for production
        /*new webpack.optimize.UglifyJsPlugin({
         debug: true,
         minimize: true,
         sourceMap: false,
         output: {
         comments: false
         },
         compressor: {
         warnings: false
         }
         })*/
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
