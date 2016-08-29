const Path = require('path');

module.exports = {
	compile: {
		dest: Path.join(__dirname, '../dist'),
		source: Path.join(__dirname, '../app'),
	},

	// Sass
	sassImportFromRoot: {
		regex: /(import ? [\s\S]+? ? from [\'\"])\@(.+?)([\'\"].*)/g,
		paths: [
			Path.join(__dirname + '../app/render'),
	    Path.join(__dirname + '../app/main'),
		],
	},

	jsImportFromRoot: {
		regex: /(import ? [\s\S]+? ? from [\'\"])\@(.+?)([\'\"].*)/g,
		paths: [
			Path.join(__dirname + '../app/render'),
	    Path.join(__dirname + '../app/main'),
		]
	}

}