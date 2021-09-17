const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/main.ts",
	},
	output: {
		library: "fireApp", // new name of the default export
		libraryExport: "default", // the named export is the default
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.ts/,
				loader: "ts-loader",
			},
		],
	},
};
