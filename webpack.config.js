const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx']
    },
    devServer: {
        inline: true,
        port: 8080,
        contentBase: path.join(__dirname, "public"),
        open: true,
        overlay: true, // shows when an error occurrs on page.
        progress: true,
        watchContentBase: true // when true, the source under public file changes will force browser to be refreshed
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    emitErrors: true,
                    failOnHint: true,
                    typeCheck: true,
                    configFile: "config/tslint.json",
                    tsConfigFile: "config/tsconfig.json",
                    fix: true
                }
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        // convert es6 to es5
                        loader:"babel-loader"
                    },
                    {
                        // converts type-script code to es6
                        loader: "ts-loader",
                        options: {
                            configFile: 'config/tsconfig.json'
                        }
                    }
                ]
            }, {
                test: /\.(jsx?)$/,
                loaders: ['babel'],
                exclude: [/node_modules/]
            }
        ]
    }
}