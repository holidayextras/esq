var fs = require('fs');

var args = process.argv;
var queryType = args[2];

if (!queryType) {
  var files = fs.readdirSync('./examples');
  files.forEach(function(file) {
    if (file == 'index.js') return;
    if (/(\w+.js)/.test(file)) {
      console.log();
      console.log('================== '+file.replace('.js', '')+' query ======================');
      require('./'+file);
    }
  });
}

if (queryType) {
  require('./'+queryType);
}
