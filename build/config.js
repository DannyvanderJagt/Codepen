const Path = require('path');

module.exports = {
	compile: {
		dest: './app',
		source: './src',
	},

	// Sass
	sassImportFromRoot: {
		regex: /(import ? [\s\S]+? ? from [\'\"])\@(.+?)([\'\"].*)/g,
		paths: [
			Path.join(__dirname, '../src/render'),
	    Path.join(__dirname, '../src/main'),
		],
	},

	jsImportFromRoot: {
		regex: /(import ? [\s\S]+? ? from [\'\"])\@(.+?)([\'\"].*)/g,
		paths: [
			Path.join(__dirname, '../src/render'),
	    Path.join(__dirname, '../src/main'),
		]
	}

}