var http = require('http');
var url = require('url');

function parsed(time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unix(time) {
	return {unixtime: time.getTime()}
}

var srv = http.createServer(function(req, res) {
	var parseUrl = url.parse(req.url, true);
	var time = new Date(parseUrl.query.iso);
	var result = "";

	if (/^\/api\/parsetime/.test(req.url, true)) {
		result = parsed(time);
	} else if (/^\/api\/unixtime/.test(req.url, true)) {
		result = unix(time);
	}

	if (result) {
		res.writeHead(200, {'content-time':'application/json'});
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}
});

srv.listen(Number(process.argv[2]));
