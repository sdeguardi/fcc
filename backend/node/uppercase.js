var http = require('http');
var map = require('through2-map');

var srv = http.createServer(function(req, res) {
	if (req.method !== 'POST') {
		return res.end('POST only\n');
	}

	req.pipe(map(function(data) {
		return data.toString().toUpperCase()})).pipe(res);
});

srv.listen(Number(process.argv[2]));

