const Path = require('path');
const pkg = require('../package');

module.exports = {
	compile: {
		dest: './app',
		source: './src',
	},

	// See electron-builder - devMetadata
	release: {
		 directories: {
      output: `./dist/${pkg.version}`
    }
	},

	// Sass
	sassImportFromRoot: {
		regex: /(@import\s[\'\"])\@(.+)([\'\"];?)/g,
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