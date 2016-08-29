const Path = require('path');

module.exports = {
	compile: {
		dest: Path.join(__dirname, '../app'),
		source: Path.join(__dirname, '../src'),
	},

	// Sass
	sassImportFromRoot: {
		regex: /(import ? [\s\S]+? ? from [\'\"])\@(.+?)([\'\"].*)/g,
		paths: [
			Path.join(__dirname + '../src/render'),
	    Path.join(__dirname + '../src/main'),
		],
	},

	jsImportFromRoot: {
		regex: /(import ? [\s\S]+? ? from [\'\"])\@(.+?)([\'\"].*)/g,
		paths: [
			Path.join(__dirname + '../src/render'),
	    Path.join(__dirname + '../src/main'),
		]
	}

}