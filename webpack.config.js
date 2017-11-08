var webpack = require("webpack");

module.exports = {
	entry: "./src/main/js/index.jsx",
	target: "node",
	output: {
		filename: "app.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"babel-preset-env", 
							"babel-preset-react"
						]
					}
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(false),
			REQUEST: JSON.stringify({}),
			process: {
				env: {
					NODE_ENV: JSON.stringify("dev")
				}
			}
		})
	],
	devtool: "#sourcemap"
};