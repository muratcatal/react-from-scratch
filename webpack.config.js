const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
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
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
            },
        ]
    }
}