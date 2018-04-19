const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    devServer: {
		inline: true,
        port: 3000,
        contentBase: path.join(__dirname, "public"),
        open: true,
        overlay: true, // shows when an error occurrs on page.
        progress: true,
        watchContentBase: true // when true, the source under public file changes will force browser to be refreshed
	},
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                options: {
                    presets: ["env","react"]
                }
            }
        ]
    }
}