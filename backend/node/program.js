var filterFn = require('./myModule');
var folder = process.argv[2];
var ext = process.argv[3];
filterFn(folder, ext, function(err, list) {
	if (err) {
	return console.error("Error!", err);
	}
	list.forEach(function(file) {
		return console.log(file);
		});	
});
