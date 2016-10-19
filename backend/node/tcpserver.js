 var net = require('net');

function zeros(i) {
	return (i < 10 ? '0' : '') + i;
}

function current() {
	var date = new Date();
	return date.getFullYear() + '-' +
		zeros(date.getMonth() + 1) + '-' +
		zeros(date.getDate()) + ' ' +
		zeros(date.getHours()) + ':' +
		zeros(date.getMinutes());
}

var srv = net.createServer(function(socket) {
	socket.end(current() + '\n');
});

srv.listen(Number(process.argv[2])); 
