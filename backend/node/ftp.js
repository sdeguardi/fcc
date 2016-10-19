var http = require('http');
var fs = require('fs');
var srv = http.createServer(function(req, res) {
	res.writeHead(200, {'content-type' : 'text/html'});
	fs.createReadStream(process.argv[3]).pipe(res);
});

srv.listen(process.argv[2]);
