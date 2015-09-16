var fs = require('fs');

var embeddedCatImage = fs.readFileSync(__dirname + '/cat.gif', 'base64');

module.exports.dataURL = 'data:image/gif;base64,' + embeddedCatImage;