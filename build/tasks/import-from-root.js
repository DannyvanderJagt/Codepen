"use strict";
const through = require('through2');

// Use @some/path to read from the /src directory.
// @components -> src/components
module.exports = (opts) => {
  if(!opts){ opts = {}; }
  let regex = opts.regex || /.*/g;
  let basePaths = opts.paths || [];

  return through.obj(function(file, enc, cb){
    var content = file.contents.toString();
    
    content = content.replace(regex, function(all, pre, match, post){
      // Produce a relative path.
      let base;
      basePaths.forEach((path) => {
        if(file.path.indexOf(path) !== -1){
          base = file.path.split(path)[1];
        }
      });

      // Ignore '@' requestes without matching base path.
      if(!base){ return; }

      var parts = base.split('/');
      parts.splice(0,2);
      parts = parts.map(() => {
        return '../'
      });

      if(parts.length === 0){
        parts = ['./']
      };

      return pre + (parts.join('') + match) + post;
    });

    file.contents = new Buffer(content);
    cb(null, file);
  });
}
