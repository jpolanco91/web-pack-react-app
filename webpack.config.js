// Webpack config

var path = require('path');

module.exports = {
	entry: 'index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/dist/"
	},

	// Babel loader and presets.
	module: {
		rules: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: [{
				loader: "babel-loader",
				options: { presets: ['env', 'react']}
			}]
		}]
	}

	// End of babel-loader
};
