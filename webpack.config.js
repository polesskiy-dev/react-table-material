const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: ['./dist/index']
    },
    output: {
        path: path.resolve('./'),
        filename: '[name].js'
    },
    eslint: {
        configFile: './.eslintrc'
    },
    // babel: {
    //     babelrc: true
    // },
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
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
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
